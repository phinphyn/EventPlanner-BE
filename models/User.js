import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (data) => {
  try {
    return await prisma.users.create({ data });
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
};

export const findUserByEmail = async (email) => {
  try {
    return await prisma.users.findUnique({ where: { email } });
  } catch (error) {
    console.error("Error finding user by email:", error);
    throw new Error("Failed to find user by email");
  }
};

export const findUserById = async (id) => {
  try {
    const data = await prisma.users.findFirst({
      select: {
        user_id: true,
        email: true,
        user_name: true,
        phone: true,
        role: true,
        created_at: true,
      },
      where: { user_id: parseInt(id) },
    });
    if (!data) return null;
    return {
      ...data,
      created_at: data.created_at.toISOString(), // Giữ nguyên toàn bộ thời gian
    };
  } catch (error) {
    console.error("Error finding user by ID:", error);
    throw new Error("Failed to find user by ID");
  }
};

export const getAllUsers = async () => {
  try {
    return await prisma.users.findMany();
  } catch (error) {
    console.error("Error getting all users:", error);
    throw new Error("Failed to get all users");
  }
};