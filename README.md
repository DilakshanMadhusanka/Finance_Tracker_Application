💰 Personal Finance Tracker (MERN)
🚀 Features
Authentication (JWT + Refresh Token)

Income & Expense Tracking

Budget Management with Alerts

Category Management

Interactive Dashboard (Charts)

🛠 Tech Stack
React + Redux Toolkit

Node.js + Express

MongoDB Atlas

⚙️ Setup Instructions
1. Clone Repo
git clone https://github.com/DilakshanMadhusanka/Finance_Tracker_Application.git

2. Backend Setup
cd backend
npm install

Create .env:
MONGO_URI=mongodb+srv://madhusankamrd_db_user:JwNoFtmR7chUfoOg@cluster0.mq3bbks.mongodb.net/?appName=Cluster0
JWT_ACCESS_SECRET=1d86bb934e0dc13081c583c43e3d915705c09691adba3f05117a74f7dfbea4a42758afa7740ef46a8655b701b58f9b619ca4d624365ceb090924232b335e3933
JWT_REFRESH_SECRET=acfef040f498397f2a66b6c33638fcf4ba9b69d880beae75b005f71d631ad49edd949823b17b92460bdbf62334c60a4f9f97fffb1e3b5eef1eeea26c901d77ee

npm run dev

3. Frontend Setup
cd frontend
npm install
npm start

🌐 API Endpoints
Auth
POST /api/auth/register
POST /api/auth/login

Transactions
GET /api/transactions
POST /api/transactions

Budgets
GET /api/budgets
