# ✍️ DevScribe – Blog Platform with Secure Authentication

A sleek and modern full-stack **MERN** blogging platform designed for secure and smooth content creation. Featuring **OTP-based signup**, **Google OAuth login**, **image upload via AWS S3**, and a fully responsive interface.

---

## 🚀 Tech Stack

- **Frontend**: React.js · Tailwind CSS · Firebase (Google OAuth)
- **Backend**: Node.js · Express.js · MongoDB
- **Authentication**: OTP via AbstractAPI · Firebase OAuth
- **Storage**: AWS S3 (for images)

---

## 🔐 Features

- ✅ Secure OTP-based Email Signup
- 🔐 Google OAuth Login with Firebase
- 📝 Create, Edit, and Delete Blog Posts
- 🖼️ Upload Blog Images to AWS S3
- 📑 Multi-step Signup Flow: Full Name → Email → Password → OTP
- 🧠 State Management with React Context API
- 📱 Fully Responsive UI (Mobile & Desktop)
- 💾 Clean and scalable folder structure

---

## 📊 Database Design

- Designed using **ER Diagram**, **Relational Model**, and **MongoDB Schema**
- Collections:
  - `Users`: name, email, password, verified, etc.
  - `Blogs`: title, content, authorId, imageURL, timestamps

---

## 📂 Folder Structure (Simplified)

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
