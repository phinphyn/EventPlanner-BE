import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createFaq = async (data) => {
  try {
    return await prisma.faq.create({ data });
  } catch (error) {
    throw new Error(`Failed to create FAQ: ${error.message}`);
  }
};

export const findFaqById = async (faq_id) => {
  try {
    return await prisma.faq.findUnique({
      where: { faq_id: parseInt(faq_id) },
    });
  } catch (error) {
    throw new Error(`Failed to find FAQ by ID: ${error.message}`);
  }
};

export const getAllFaqs = async () => {
  try {
    return await prisma.faq.findMany();
  } catch (error) {
    throw new Error(`Failed to get all FAQs: ${error.message}`);
  }
};

export const updateFaq = async (faq_id, data) => {
  try {
    return await prisma.faq.update({
      where: { faq_id: parseInt(faq_id) },
      data,
    });
  } catch (error) {
    throw new Error(`Failed to update FAQ: ${error.message}`);
  }
};

export const deleteFaq = async (faq_id) => {
  try {
    await prisma.faq.delete({
      where: { faq_id: parseInt(faq_id) },
    });
  } catch (error) {
    throw new Error(`Failed to delete FAQ: ${error.message}`);
  }
};