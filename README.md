# 🛒 VP-E-Commerce Platform

A full-featured e-commerce platform built with the MERN stack (MongoDB, Express.js, React, Node.js) with Razorpay payment integration.

## 📋 Features

✅ User Authentication (JWT)
✅ Product Management (CRUD)
✅ Shopping Cart
✅ Order Management
✅ Razorpay Payment Integration
✅ Admin Dashboard
✅ Order Tracking
✅ Responsive Design
✅ MongoDB Atlas Integration

## 🛠️ Tech Stack

**Backend:**
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication
- Razorpay API

**Frontend:**
- React 18
- Vite
- React Router
- Axios
- CSS3

## 📦 Installation

### Backend Setup

```bash
cd server
npm install
```

Create `.env` file:
```
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

Run backend:
```bash
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

## 📝 API Endpoints

### Auth
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders/my-orders` - Get user orders
- `GET /api/orders/admin/all` - Get all orders (Admin)
- `PUT /api/orders/:id/status` - Update order status (Admin)

## 🌐 Customer Care

📞 Call us: **8300397874**

## 📱 Follow Us

📷 Instagram
👥 Facebook

## 📄 License

MIT License