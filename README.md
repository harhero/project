### `README.md`

# DanDun-backend

DanDun-backend is the backend service for the DanDun e-commerce application. This service handles all the API endpoints required for managing users, vendors, products, orders, subscriptions, and more. It also includes authentication, authorization, and various utility services.

## Table of Contents

- [DanDun-backend](#dandun-backend)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
  - [API Documentation](#api-documentation)
  - [Folder Structure](#folder-structure)
  - [Environment Variables](#environment-variables)
  - [Models](#models)
  - [Routes](#routes)
  - [Controllers](#controllers)
  - [Middlewares](#middlewares)
  - [Utility Functions](#utility-functions)
  - [Error Handling](#error-handling)
  - [License](#license)

## Features

- User Authentication and Authorization (JWT, Firebase Auth for Google and Facebook)
- Vendor Management
- Product Management
- Order Management
- Subscription Management
- Chat System between Vendors and Users
- Notifications
- Analytics and Reports
- Role-based Access Control
- File Uploads using Multer
- API Documentation with Swagger

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- Multer
- Swagger for API documentation

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance running

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/brijk20/DanDun-backend.git
   cd DanDun-backend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

### Running the Application

1. Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   NODE_ENV=development
   PORT=3500
   MONGO_URI=mongodb+srv://your_username:your_password@your_cluster_url/your_database_name?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRE=30d
   ```

2. Start the server:

   ```sh
   npm start
   ```

3. For development mode with nodemon:

   ```sh
   npm run dev
   ```

## API Documentation

Access the API documentation at [http://localhost:3500/api-docs](http://localhost:3500/api-docs).

## Folder Structure

```plaintext
.
├── config
│   ├── db.js
│   ├── swagger.js
│   └── config.env
├── controllers
│   ├── authController.js
│   ├── userController.js
│   ├── vendorController.js
│   ├── productController.js
│   ├── orderController.js
│   ├── subscriptionController.js
│   ├── chatController.js
│   ├── notificationController.js
│   ├── analyticsController.js
│   ├── userActivityController.js
│   ├── couponController.js
│   └── addressController.js
├── middlewares
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│   ├── logger.js
│   └── uploadMiddleware.js
├── models
│   ├── User.js
│   ├── Vendor.js
│   ├── Product.js
│   ├── Order.js
│   ├── Subscription.js
│   ├── Chat.js
│   ├── Notification.js
│   ├── Analytics.js
│   ├── UserActivity.js
│   ├── Coupon.js
│   └── Address.js
├── routes
│   ├── authRoutes.js
│   ├── userRoutes.js
│   ├── vendorRoutes.js
│   ├── productRoutes.js
│   ├── orderRoutes.js
│   ├── subscriptionRoutes.js
│   ├── chatRoutes.js
│   ├── notificationRoutes.js
│   ├── analyticsRoutes.js
│   ├── userActivityRoutes.js
│   ├── couponRoutes.js
│   └── addressRoutes.js
├── utils
│   └── validateData.js
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## Environment Variables

The application requires the following environment variables:

- `NODE_ENV`: The environment in which the application is running (`development`, `production`, etc.).
- `PORT`: The port on which the application will run.
- `MONGO_URI`: The MongoDB connection string.
- `JWT_SECRET`: Secret key for JWT authentication.
- `JWT_EXPIRE`: JWT expiration time.

## Models

The application includes the following Mongoose models:

- User
- Vendor
- Product
- Order
- Subscription
- Chat
- Notification
- Analytics
- UserActivity
- Coupon
- Address

## Routes

The application includes the following routes:

- Authentication: `/api/auth`
- Users: `/api/users`
- Vendors: `/api/vendors`
- Categories: `/api/categories`
- Subcategories: `/api/subcategories`
- Products: `/api/products`
- Orders: `/api/orders`
- Payouts: `/api/payouts`
- Payments: `/api/payments`
- Chats: `/api/chats`
- Notifications: `/api/notifications`
- Carts: `/api/carts`
- Subscriptions: `/api/subscriptions`
- Admin: `/api/admin`
- Analytics: `/api/analytics`
- User Activity: `/api/user-activity`
- Coupons: `/api/coupons`
- Addresses: `/api/addresses`

## Controllers

The controllers handle the business logic for each route:

- `authController.js`: Handles user authentication.
- `userController.js`: Manages user operations.
- `vendorController.js`: Manages vendor operations.
- `productController.js`: Manages product operations.
- `orderController.js`: Manages order operations.
- `subscriptionController.js`: Manages subscription operations.
- `chatController.js`: Handles chat functionality.
- `notificationController.js`: Manages notifications.
- `analyticsController.js`: Provides analytics and reporting.
- `userActivityController.js`: Logs user activities.
- `couponController.js`: Manages coupon operations.
- `addressController.js`: Handles address management.

## Middlewares

The application includes the following middlewares:

- `authMiddleware.js`: Provides authentication and authorization functions.
- `errorMiddleware.js`: Handles error responses.
- `logger.js`: Custom logger for request logging.
- `uploadMiddleware.js`: Handles file uploads using Multer.

## Utility Functions

- `validateData.js`: Contains functions for validating data inputs.

## Error Handling

The application uses a centralized error handling middleware to catch and respond to errors consistently.

## License

This project is licensed under the MIT License.
#   t a s k e r - g g  
 