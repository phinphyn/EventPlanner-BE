import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createNotification = async (data) => {
  try {
    return await prisma.notification.create({ data });
  } catch (error) {
    throw new Error(`Failed to create notification: ${error.message}`);
  }
};

export const findNotificationById = async (notification_id) => {
  try {
    return await prisma.notification.findUnique({
      where: { notification_id: parseInt(notification_id) },
      include: {
        account: { select: { account_id: true, email: true, user_name: true } },
      },
    });
  } catch (error) {
    throw new Error(`Failed to find notification by ID: ${error.message}`);
  }
};

export const getAllNotifications = async () => {
  try {
    return await prisma.notification.findMany({
      include: {
        account: { select: { account_id: true, email: true, user_name: true } },
      },
    });
  } catch (error) {
    throw new Error(`Failed to get all notifications: ${error.message}`);
  }
};

export const updateNotification = async (notification_id, data) => {
  try {
    return await prisma.notification.update({
      where: { notification_id: parseInt(notification_id) },
      data,
    });
  } catch (error) {
    throw new Error(`Failed to update notification: ${error.message}`);
  }
};

export const deleteNotification = async (notification_id) => {
  try {
    await prisma.notification.delete({
      where: { notification_id: parseInt(notification_id) },
    });
  } catch (error) {
    throw new Error(`Failed to delete notification: ${error.message}`);
  }
};

export const findNotificationsByAccountId = async (account_id) => {
  try {
    return await prisma.notification.findMany({
      where: { account_id: parseInt(account_id) },
      include: {
        account: { select: { account_id: true, email: true, user_name: true } },
      },
    });
  } catch (error) {
    throw new Error(`Failed to find notifications by account ID: ${error.message}`);
  }
};

export const findUnreadNotifications = async (account_id) => {
  try {
    return await prisma.notification.findMany({
      where: {
        account_id: parseInt(account_id),
        is_read: false,
      },
      include: {
        account: { select: { account_id: true, email: true, user_name: true } },
      },
    });
  } catch (error) {
    throw new Error(`Failed to find unread notifications: ${error.message}`);
  }
};