import prisma from './prisma.js';

const services = [
  {
    service_name: "Chụp ảnh sự kiện",
    description: "Dịch vụ nhiếp ảnh chuyên nghiệp cho tiệc cưới, sinh nhật, hội nghị. Bao gồm chỉnh sửa ảnh cơ bản.",
    price: 1500.00,
    category: "Photography"
  },
  {
    service_name: "Tiệc buffet cao cấp",
    description: "Cung cấp thực đơn buffet đa dạng với các món ăn Á-Âu, phù hợp cho tiệc cưới và sự kiện lớn.",
    price: 5000.00,
    category: "Food"
  },
  {
    service_name: "Thiết kế sân khấu",
    description: "Thiết kế và thi công sân khấu theo chủ đề, phù hợp với tiệc cưới, sự kiện doanh nghiệp.",
    price: 3000.00,
    category: "Design"
  },
  {
    service_name: "Hệ thống âm thanh ánh sáng",
    description: "Cung cấp thiết bị âm thanh, ánh sáng hiện đại cho sự kiện, bao gồm loa, đèn LED và kỹ thuật viên.",
    price: 2500.00,
    category: "AudioVisual"
  },
  {
    service_name: "In thiệp mời cao cấp",
    description: "Thiết kế và in thiệp mời theo yêu cầu, chất liệu giấy cao cấp, phù hợp cho tiệc cưới và sự kiện.",
    price: 300.00,
    category: "Invitation"
  },
  {
    service_name: "Mâm quả lễ cưới",
    description: "Chuẩn bị mâm quả truyền thống cho lễ cưới, bao gồm trầu cau, bánh phu thê, trà, rượu.",
    price: 1000.00,
    category: "Ceremony"
  },
  {
    service_name: "Trang trí hoa tươi",
    description: "Trang trí hoa tươi cho tiệc cưới, sinh nhật, bao gồm cổng hoa, bàn tiệc và khu vực lễ.",
    price: 2000.00,
    category: "Decoration"
  },
  {
    service_name: "MC dẫn chương trình",
    description: "Dịch vụ MC chuyên nghiệp, dẫn dắt chương trình sự kiện, tiệc cưới, hội nghị.",
    price: 800.00,
    category: "Entertainment"
  },
  {
    service_name: "Băng rôn và backdrop",
    description: "Thiết kế và in băng rôn, backdrop cho sự kiện, hội nghị, tiệc cưới.",
    price: 500.00,
    category: "Design"
  },
  {
    service_name: "Cho thuê váy cưới",
    description: "Cung cấp váy cưới cao cấp, đa dạng kiểu dáng, kèm dịch vụ chỉnh sửa theo số đo.",
    price: 1200.00,
    category: "Apparel"
  }
];

async function seed() {
  try {
    for (const service of services) {
      await prisma.service.create({ data: service });
    }
    console.log("Seeded services successfully");
  } catch (error) {
    console.error("Error seeding services:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();