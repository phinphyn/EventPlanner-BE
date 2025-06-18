import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const createAddress = async (data) => {
    try {
        if (data.event_id) {
            const existingAddress = await prisma.address.findFirst({
                where: { event_id: data.event_id },
            });
            if (existingAddress) {
                throw new Error("Event ID is already assigned to another address.");
            }
        }
        return await prisma.address.create({ data });
    } catch (error) {
        throw new Error(`Failed to create address: ${error.message}`);
    }
};


export const findAddressById = async (address_id) => {
    try {
        return await prisma.address.findUnique({
            where: { address_id: parseInt(address_id) },
            include: {
                account: { select: { account_id: true, email: true, user_name: true } },
                event: { select: { event_id: true, event_title: true } },
            },
        });
    } catch (error) {
        throw new Error(`Failed to find address by ID: ${error.message}`);
    }
};


export const getAllAddresses = async () => {
    try {
        return await prisma.address.findMany({
            include: {
                account: { select: { account_id: true, email: true, user_name: true } },
                event: { select: { event_id: true, event_title: true } },
            },
        });
    } catch (error) {
        throw new Error(`Failed to get all addresses: ${error.message}`);
    }
};


export const updateAddress = async (address_id, data) => {
    try {
        if (data.event_id) {
            const existingAddress = await prisma.address.findFirst({
                where: {
                    event_id: data.event_id,
                    address_id: { not: parseInt(address_id) },
                },
            });
            if (existingAddress) {
                throw new Error("Event ID is already assigned to another address.");
            }
        }
        return await prisma.address.update({
            where: { address_id: parseInt(address_id) },
            data,
        });
    } catch (error) {
        throw new Error(`Failed to update address: ${error.message}`);
    }
};


export const deleteAddress = async (address_id) => {
    try {
        return await prisma.address.delete({
            where: { address_id: parseInt(address_id) },
        });
    } catch (error) {
        throw new Error(`Failed to delete address: ${error.message}`);
    }
};


export const findAddressesByAccountId = async (account_id) => {
    try {
        return await prisma.address.findMany({
            where: { account_id: parseInt(account_id) },
            include: {
                account: { select: { account_id: true, email: true, user_name: true } },
                event: { select: { event_id: true, event_title: true } },
            },
        });
    } catch (error) {
        throw new Error(`Failed to find addresses by account ID: ${error.message}`);
    }
};