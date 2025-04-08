# ✍️  – Blog Platform with Secure Authentication

A modern full-stack **MERN** blog platform designed for secure and seamless content creation. Features **OTP-based signup**, **Google OAuth login**, **image uploads to AWS S3**, and a sleek, responsive interface.

---

## 🚀 Tech Stack

- **Frontend**: React.js · Tailwind CSS · Firebase (Google OAuth)
- **Backend**: Node.js · Express.js · MongoDB
- **Authentication**: OTP via AbstractAPI · Firebase OAuth
- **Storage**: AWS S3 (for image uploads)

---

## 🔐 Key Features

- ✅ Secure OTP-based Email Signup
- 🔐 Google OAuth Login via Firebase
- 📝 Create, Edit, and Delete Blog Posts
- 🖼️ Upload Blog Images to AWS S3
- 📑 Multi-step Signup Flow (Name → Email → Password → OTP)
- 📱 Fully Responsive UI (Mobile & Desktop)
- 🧠 State Management with React Context API
- 💡 Clean, scalable, feature-based folder structure

---

## 📊 Data & Design Planning

Although **MongoDB is schema-less**, proper planning was done to ensure organized, scalable data storage:

- ✅ Designed **ER Diagram** and **Relational Mapping** for Users & Blogs  
- ✅ Defined **Document Schema Structure** before implementation  
- ✅ Planned data relationships (Referencing for users, blogs, images)  
- ✅ Used schema validation via **Mongoose** models

### 📂 Collections Overview

- `users`: name, email, password, isVerified, createdAt, etc.
- `blogs`: title, content, imageUrl, authorId (ref), timestamps

---

## 🗂 Folder Structure (Simplified)

```bash
DevScribe/
├── client/              # React.js frontend
│   ├── components/
│   ├── context/
│   ├── pages/
│   └── utils/
├── server/              # Node.js backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── middleware/
├── README.md
└── .env
