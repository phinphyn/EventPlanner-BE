const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


router.get("/", async (req, res) => {
  try {
    const services = await prisma.service.findMany();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: "Lỗi server" });
  }
});

router.post("/", async (req, res) => {
    const { name, price, category } = req.body;
    try {
      const service = await prisma.service.create({
        data: { name, price, category },
      });
      res.status(201).json(service);
    } catch (error) {
      res.status(500).json({ error: "Lỗi server" });
    }
  });

  
module.exports = router;