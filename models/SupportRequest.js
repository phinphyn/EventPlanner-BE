import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createSupportRequest = async (data) => {
  try {
    return await prisma.supportRequest.create({ data });
  } catch (error) {
    throw new Error(`Failed to create support request: ${error.message}`);
  }
};

export const findSupportRequestById = async (support_id) => {
  try {
    return await prisma.supportRequest.findUnique({
      where: { support_id: parseInt(support_id) },
      include: {
        account: { select: { account_id: true, email: true, user_name: true } },
        event: { select: { event_id: true, event_title: true } },
      },
    });
  } catch (error) {
    throw new Error(`Failed to find support request by ID: ${error.message}`);
  }
};

export const getAllSupportRequests = async () => {
  try {
    return await prisma.supportRequest.findMany({
      include: {
        account: { select: { account_id: true, email: true, user_name: true } },
        event: { select: { event_id: true, event_title: true } },
      },
    });
  } catch (error) {
    throw new Error(`Failed to get all support requests: ${error.message}`);
  }
};

export const updateSupportRequest = async (support_id, data) => {
  try {
    return await prisma.supportRequest.update({
      where: { support_id: parseInt(support_id) },
      data,
    });
  } catch (error) {
    throw new Error(`Failed to update support request: ${error.message}`);
  }
};

export const deleteSupportRequest = async (support_id) => {
  try {
    await prisma.supportRequest.delete({
      where: { support_id: parseInt(support_id) },
    });
  } catch (error) {
    throw new Error(`Failed to delete support request: ${error.message}`);
  }
};

export const findSupportRequestsByAccountId = async (account_id) => {
  try {
    return await prisma.supportRequest.findMany({
      where: { account_id: parseInt(account_id) },
      include: {
        account: { select: { account_id: true, email: true, user_name: true } },
        event: { select: { event_id: true, event_title: true } },
      },
    });
  } catch (error) {
    throw new Error(`Failed to find support requests by account ID: ${error.message}`);
  }
};

export const findSupportRequestsByStatus = async (status) => {
  try {
    return await prisma.supportRequest.findMany({
      where: { status },
      include: {
        account: { select: { account_id: true, email: true, user_name: true } },
        event: { select: { event_id: true, event_title: true } },
      },
    });
  } catch (error) {
    throw new Error(`Failed to find support requests by status: ${error.message}`);
  }
};
