const express = require('express');
const dotenv = require("dotenv");
const morgan = require("morgan");
//const helmet = require("helmet");
//const cors = require("cors");

// const logger = require("./middlewares/logger");

// Load environment variables
//dotenv.config({ path: "./.env" });

// Connect to database 

const app = express();

// Body parser
app.use(express.json());

// Security headers
//app.use(helmet());

// Enable CORS
//app.use(cors());

// Dev logging
//if (process.env.NODE_ENV === "development") {
  //app.use(morgan("dev"));
//}

// server.js
 
const UserRoutes = require('./routes/UserRoutes');
const TaskRoutes = require('./routes/TaskRoutes');
const MessageRouter = require ('./routes/MessageRoutes')
//const BidRoutes = require('./routes/');
//const TaskassignmentRoutes = require('./routes/');
//const ReviewRoutes = require('./routes/ReviewRoutes');
//const PaymentRoutes = require('./routes/PaymentRoutes')
app.use(express.json());

// Define Routes
//app.Use('/api/',MessageRouter);
//app.Use('/api/',PaymentRoutes);
//app.Use('/api/',ReviewRoutes);
//app.Use('/api/',TaskRoutes);
//app.Use('/api/',UserRoutes);

const PORT = process.env.PORT || 1212
const HOST = "0.0.0.0";

// Use server.listen to include Socket.IO
app.listen(PORT, HOST, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});  