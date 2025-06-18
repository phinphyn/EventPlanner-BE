import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createLog = async (data) => {
  try {
    return await prisma.log.create({ data });
  } catch (error) {
    throw new Error(`Failed to create log: ${error.message}`);
  }
};

export const findLogById = async (log_id) => {
  try {
    return await prisma.log.findUnique({
      where: { log_id: parseInt(log_id) },
      include: {
        account: { select: { account_id: true, email: true, user_name: true } },
      },
    });
  } catch (error) {
    throw new Error(`Failed to find log by ID: ${error.message}`);
  }
};

export const getAllLogs = async () => {
  try {
    return await prisma.log.findMany({
      include: {
        account: { select: { account_id: true, email: true, user_name: true } },
      },
    });
  } catch (error) {
    throw new Error(`Failed to get all logs: ${error.message}`);
  }
};

export const deleteLog = async (log_id) => {
  try {
    await prisma.log.delete({
      where: { log_id: parseInt(log_id) },
    });
  } catch (error) {
    throw new Error(`Failed to delete log: ${error.message}`);
  }
};

export const findLogsByAccountId = async (account_id) => {
  try {
    return await prisma.log.findMany({
      where: { account_id: parseInt(account_id) },
      include: {
        account: { select: { account_id: true, email: true, user_name: true } },
      },
    });
  } catch (error) {
    throw new Error(`Failed to find logs by account ID: ${error.message}`);
  }
};