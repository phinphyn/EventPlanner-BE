// models/services.js
export const createService = async (data, prisma) => {
  try {
    return await prisma.services.create({ data });
  } catch (error) {
    throw new Error(`Failed to create service: ${error.message}`);
  }
};

export const findServiceById = async (id, prisma) => {
  try {
    return await prisma.services.findUnique({ where: { id: parseInt(id) } });
  } catch (error) {
    throw new Error(`Failed to find service by ID: ${error.message}`);
  }
};

export const getAllServices = async (req, res) => {
  try {
    const services = await getAllServices(req.prisma);
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateService = async (id, data, prisma) => {
  try {
    return await prisma.services.update({
      where: { id: parseInt(id) },
      data,
    });
  } catch (error) {
    throw new Error(`Failed to update service: ${error.message}`);
  }
};

export const deleteService = async (id, prisma) => {
  try {
    return await prisma.services.delete({ where: { id: parseInt(id) } });
  } catch (error) {
    throw new Error(`Failed to delete service: ${error.message}`);
  }
};

export const findServiceByName = async (name, prisma) => {
  try {
    return await prisma.services.findUnique({ where: { name } });
  } catch (error) {
    throw new Error(`Failed to find service by name: ${error.message}`);
  }
};

export const findServiceByCategory = async (category, prisma) => {
  try {
    return await prisma.services.findMany({ where: { category } });
  } catch (error) {
    throw new Error(`Failed to find service by category: ${error.message}`);
  }
};