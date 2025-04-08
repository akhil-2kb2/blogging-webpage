import axios from "axios";
import AnimationWrapper from "../common/page-animation";
import InPageNavigation from "../components/inpage-navigation.component";
import { useEffect, useState } from "react";
import Loader from "../components/loader.component"
import BlogPostCard from "../components/blog-post.component";
import MinimalBlogPost from "../components/nobanner-blog-post.component";
import { activeTabRef } from "../components/inpage-navigation.component";
import NoDataMessage from "../components/nodata.component";
import { filterPaginationData } from "../common/filter-pagination-data";
import LoadMoreDataBtn from "../components/load-more.component";

const HomePage = () => {


    let [blogs, setBlog] = useState(null);
    let [trendingBlogs, setTrendingBlog] = useState(null);
    let [pageState, setPageState] = useState("home");

    let categories = ["programming", "Mountains", "Trees", "Fishing", "Ai", "tech", "Business", "Earth", "Alien"]

    const fetchLatestBlogs = ({ page = 1 }) => {
        axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/latest-blogs", { page })
            .then(async ({ data }) => {

                let formatedData = await filterPaginationData({
                    state: blogs,
                    data: data.blogs,
                    page,
                    countRoute: "/all-latest-blogs-count"

                })
                setBlog(formatedData)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const fetchBlogsBycategory = ({ page = 1 }) => {
        axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/search-blogs", { tag: pageState, page })
            .then(async ({ data }) => {
                let formatedData = await filterPaginationData({
                    state: blogs,
                    data: data.blogs,
                    page,
                    countRoute: "/search-blogs-count",
                   data_to_send:{tag:pageState} 

                })
                setBlog(formatedData)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const fetchTrendingBlog = () => {
        axios.get(import.meta.env.VITE_SERVER_DOMAIN + "/trending-blogs")
            .then(({ data }) => {
                setTrendingBlog(data.blogs)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const loadBlogByCategory = (e) => {
        let category = e.target.innerText.toLowerCase();
        setBlog(null);

        if (pageState === category) {
            setPageState("home");
            return;
        }
        setPageState(category)

    }


    useEffect(() => {

        activeTabRef.current.click();

        if (pageState == "home") {
            fetchLatestBlogs({ page: 1 });

        } else {
            fetchBlogsBycategory({page:1});
        }

        if (!trendingBlogs) {
            fetchTrendingBlog();

        }
    }, [pageState])

    return (
        <AnimationWrapper>
            <section className="hh-cover flex flex-col md:flex-row justify-center gap-6 px-4 sm:px-6 md:px-8 py-4">
                {/* latest blog */}
                <div className="w-full md:w-2/3 pl-6">
                    <InPageNavigation routes={[pageState, "trending blogs"]} defaultHidden={["trending blogs"]}>

                        <>
                            {
                                blogs == null ? (<Loader />) :
                                    (blogs.results.length ?
                                        blogs.results.map((blog, i) => {
                                            return (
                                                <AnimationWrapper transition={{ duration: 1, delay: i * .1 }} key={i}>
                                                    <BlogPostCard content={blog} author={blog.author.personal_info} />
                                                </AnimationWrapper>
                                            );
                                        })
                                        : <NoDataMessage message="No Blogs Published" />
                                    )}
                            <LoadMoreDataBtn state={blogs} fetchDataFun={(pageState == "home" ? fetchLatestBlogs : fetchBlogsBycategory)} />
                        </>

                        {
                            trendingBlogs == null ? (<Loader />) : (
                                trendingBlogs.length ?
                                    trendingBlogs.map((blog, i) => {
                                        return (<AnimationWrapper transition={{ duration: 1, delay: i * .1 }} key={i}>
                                            <MinimalBlogPost blog={blog} index={i} />
                                        </AnimationWrapper>
                                        )
                                    })
                                    : <NoDataMessage message="No Trendings Blogs" />
                            )}

                    </InPageNavigation>
                </div>

                {/* {filters and trending blogs } */}

                <div className="w-full md:w-1/3 lg:w-2/5 md:max-w-[350px] lg:max-w-[400px] border-l border-grey pl-0 md:pl-6 pt-3">
                    <div className="flex flex-col gap-10 ">
                        <div>

                            <h1 className="font-medium text-xl mb-8">Stories from all interests</h1>

                            <div className="flex gap-3 flex-wrap">
                                {
                                    categories.map((category, i) => {
                                        return <button
                                            onClick={loadBlogByCategory}
                                            className={"tag " + (pageState === category.toLowerCase()
                                                ? " bg-black text-white " : " ")}
                                            key={i}>
                                            {category}
                                        </button>
                                    })
                                }

                            </div>
                        </div>

                        <div>
                            <h1 className="font-medium text-xl mb-8">Trending
                                <i className="fi fi-br-arrow-trend-up"></i></h1>

                            {
                                trendingBlogs == null ? (<Loader />) : (
                                    trendingBlogs.length ?
                                        trendingBlogs.map((blog, i) => {
                                            return (<AnimationWrapper transition={{ duration: 1, delay: i * .1 }} key={i}>
                                                <MinimalBlogPost blog={blog} index={i} />
                                            </AnimationWrapper>)
                                        })
                                        : <NoDataMessage message="No Trendings Blogs" />
                                )}
                        </div>

                    </div>
                </div>
            </section>

        </AnimationWrapper>
    )
}
export default HomePage;