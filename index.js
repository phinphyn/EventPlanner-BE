const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const serviceRoutes = require("./routes/services");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Chào mừng đến với API tổ chức sự kiện!" });
});
app.use("/services", serviceRoutes);

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});