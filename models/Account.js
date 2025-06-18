import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (data) => {
  try {
    return await prisma.account.create({ data });
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
};

export const findUserByEmail = async (email) => {
  try {
    return await prisma.account.findUnique({ where: { email } });
  } catch (error) {
    console.error("Error finding user by email:", error);
    throw new Error("Failed to find user by email");
  }
};

export const findUserById = async (id) => {
  try {
    const data = await prisma.account.findFirst({
      select: {
        account_id: true,
        email: true,
        user_name: true,
        phone: true,
        role: true,
        created_at: true,
      },
      where: { account_id: parseInt(id) },
    });
    if (!data) return null;
    return {
      ...data,
      created_at: data.created_at.toISOString(), 
    };
  } catch (error) {
    console.error("Error finding user by ID:", error);
    throw new Error("Failed to find user by ID");
  }
};

export const getAllUsers = async () => {
  try {
    return await prisma.account.findMany();
  } catch (error) {
    console.error("Error getting all users:", error);
    throw new Error("Failed to get all users");
  }
};

export const updateUser = async (id, data) => {
  try {
    return await prisma.account.update({
      where: { user_id: parseInt(id) },
      data,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    throw new Error("Failed to update user");
  }
};

export const deleteUser = async (id) => {
  try {
    await prisma.account.delete({
      where: { user_id: parseInt(id) },
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("Failed to delete user");
  }
};