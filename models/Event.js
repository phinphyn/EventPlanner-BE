import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createEvent = async (data) => {
  try {
    return await prisma.event.create({ data });
  } catch (error) {
    throw new Error(`Failed to create event: ${error.message}`);
  }
};

export const findEventById = async (event_id) => {
  try {
    return await prisma.event.findUnique({
      where: { event_id: parseInt(event_id) },
      include: {
        account: { select: { account_id: true, email: true, user_name: true } },
        address: true,
      },
    });
  } catch (error) {
    throw new Error(`Failed to find event by ID: ${error.message}`);
  }
};

export const getAllEvents = async () => {
  try {
    return await prisma.event.findMany({
      include: {
        account: { select: { account_id: true, email: true, user_name: true } },
        address: true,
      },
    });
  } catch (error) {
    throw new Error(`Failed to get all events: ${error.message}`);
  }
};

export const updateEvent = async (event_id, data) => {
  try {
    return await prisma.event.update({
      where: { event_id: parseInt(event_id) },
      data,
    });
  } catch (error) {
    throw new Error(`Failed to update event: ${error.message}`);
  }
};

export const deleteEvent = async (event_id) => {
  try {
    await prisma.event.delete({
      where: { event_id: parseInt(event_id) },
    });
  } catch (error) {
    throw new Error(`Failed to delete event: ${error.message}`);
  }
};

export const findEventsByAccountId = async (account_id) => {
  try {
    return await prisma.event.findMany({
      where: { account_id: parseInt(account_id) },
      include: {
        account: { select: { account_id: true, email: true, user_name: true } },
        address: true,
      },
    });
  } catch (error) {
    throw new Error(`Failed to find events by account ID: ${error.message}`);
  }
};

export const findEventsByStatus = async (status) => {
  try {
    return await prisma.event.findMany({
      where: { status },
      include: {
        account: { select: { account_id: true, email: true, user_name: true } },
        address: true,
      },
    });
  } catch (error) {
    throw new Error(`Failed to find events by status: ${error.message}`);
  }
};

export const findEventsByType = async (event_type) => {
  try {
    return await prisma.event.findMany({
      where: { event_type },
      include: {
        account: { select: { account_id: true, email: true, user_name: true } },
        address: true,
      },
    });
  } catch (error) {
    throw new Error(`Failed to find events by type: ${error.message}`);
  }
};