import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createPayment = async (data) => {
  try {
    return await prisma.payment.create({ data });
  } catch (error) {
    throw new Error(`Failed to create payment: ${error.message}`);
  }
};

export const findPaymentById = async (payment_id) => {
  try {
    return await prisma.payment.findUnique({
      where: { payment_id: parseInt(payment_id) },
      include: {
        event: { select: { event_id: true, event_title: true } },
      },
    });
  } catch (error) {
    throw new Error(`Failed to find payment by ID: ${error.message}`);
  }
};

export const getAllPayments = async () => {
  try {
    return await prisma.payment.findMany({
      include: {
        event: { select: { event_id: true, event_title: true } },
      },
    });
  } catch (error) {
    throw new Error(`Failed to get all payments: ${error.message}`);
  }
};

export const updatePayment = async (payment_id, data) => {
  try {
    return await prisma.payment.update({
      where: { payment_id: parseInt(payment_id) },
      data,
    });
  } catch (error) {
    throw new Error(`Failed to update payment: ${error.message}`);
  }
};

export const deletePayment = async (payment_id) => {
  try {
    await prisma.payment.delete({
      where: { payment_id: parseInt(payment_id) },
    });
  } catch (error) {
    throw new Error(`Failed to delete payment: ${error.message}`);
  }
};

export const findPaymentsByEventId = async (event_id) => {
  try {
    return await prisma.payment.findMany({
      where: { event_id: parseInt(event_id) },
      include: {
        event: { select: { event_id: true, event_title: true } },
      },
    });
  } catch (error) {
    throw new Error(`Failed to find payments by event ID: ${error.message}`);
  }
};

export const findPaymentsByStatus = async (status) => {
  try {
    return await prisma.payment.findMany({
      where: { status },
      include: {
        event: { select: { event_id: true, event_title: true } },
      },
    });
  } catch (error) {
    throw new Error(`Failed to find payments by status: ${error.message}`);
  }
};