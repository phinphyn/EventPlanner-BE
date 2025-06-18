import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createService = async (data) => {
  try {
    return await prisma.service.create({ data });
  } catch (error) {
    throw new Error(`Failed to create service: ${error.message}`);
  }
};

export const findServiceById = async (service_id) => {
  try {
    return await prisma.service.findUnique({ where: { service_id: parseInt(service_id) } });
  } catch (error) {
    throw new Error(`Failed to find service by ID: ${error.message}`);
  }
};

export const getAllServices = async () => {
  try {
    return await prisma.service.findMany();
  } catch (error) {
    throw new Error(`Failed to get all services: ${error.message}`);
  }
};

export const updateService = async (service_id, data) => {
  try {
    return await prisma.service.update({
      where: { service_id: parseInt(service_id) },
      data,
    });
  } catch (error) {
    throw new Error(`Failed to update service: ${error.message}`);
  }
};

export const deleteService = async (service_id) => {
  try {
    return await prisma.service.delete({ where: { service_id: parseInt(service_id) } });
  } catch (error) {
    throw new Error(`Failed to delete service: ${error.message}`);
  }
};

export const findServiceByName = async (service_name) => {
  try {
    return await prisma.service.findFirst({ where: { service_name } });
  } catch (error) {
    throw new Error(`Failed to find service by name: ${error.message}`);
  }
};

export const findServiceByCategory = async (category) => {
  try {
    return await prisma.service.findMany({ where: { category } });
  } catch (error) {
    throw new Error(`Failed to find service by category: ${error.message}`);
  }
};