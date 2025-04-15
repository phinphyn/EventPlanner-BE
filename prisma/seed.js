const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.service.createMany({
    data: [
      { name: "Trang trí tiệc cưới", price: 5000000, category: "Trang trí" },
      { name: "Catering hội nghị", price: 10000000, category: "Catering" },
    ],
  });
  console.log("Đã thêm dữ liệu mẫu!");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });