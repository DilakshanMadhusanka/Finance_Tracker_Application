# 💰 Personal Finance Tracker (MERN)

A full-stack Personal Finance Tracker built with the MERN stack to manage income, expenses, and budgets with secure authentication and an interactive dashboard.

### 🚀 Features

🔐 JWT Authentication (Access + Refresh Tokens) \
💵 Track Income & Expenses \
📊 Budget Management with Alerts \
🗂 Category Management \
📈 Interactive Dashboard with Charts \

### 🛠 Tech Stack

Layer	Technology \
Frontend	React, Redux Toolkit, Tailwind CSS \
Backend	Node.js, Express.js \
Database	MongoDB Atlas \

### 📂 Project Structure

Finance_Tracker_Application/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── store/
│
└── README.md

### ⚙️ Installation & Setup

1️⃣ Clone Repository

git clone https://github.com/DilakshanMadhusanka/Finance_Tracker_Application.git \
cd Finance_Tracker_Application

2️⃣ Backend Setup

cd backend \
npm install

### Create a .env file:

MONGO_URI=your_mongodb_connection_string \
JWT_ACCESS_SECRET=your_access_secret \
JWT_REFRESH_SECRET=your_refresh_secret

### Run backend:

npm run dev

3️⃣ Frontend Setup

cd frontend \
npm install \
npm start

### 🌐 API Endpoints

🔐 Authentication \

Method	Endpoint	Description \
POST	/api/auth/register	Register user \
POST	/api/auth/login	Login user \

💳 Transactions\

Method	Endpoint	Description \
GET	/api/transactions	Get transactions \
POST	/api/transactions	Add transaction \

📊 Budgets \

Method	Endpoint	Description \
GET	/api/budgets	Get budgets