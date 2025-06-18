import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import addressRoutes from "./routes/addressRoutes.js";
import logRoutes from "./routes/logRoutes.js";
import faqRoutes from "./routes/faqRoutes.js";
import eventServiceRoutes from "./routes/eventServiceRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/addresses", addressRoutes);
app.use("/api/logs", logRoutes);
app.use("/api/faqs", faqRoutes);
app.use("/api/event-services", eventServiceRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/payments", paymentRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});