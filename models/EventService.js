import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Add a service to an event
export const addEventService = async (data) => {
    try {
        
        const existingEventService = await prisma.eventService.findUnique({
            where: {
                event_id_service_id: {
                    event_id: data.event_id,
                    service_id: data.service_id,
                },
            },
        });

        if (existingEventService) {
            throw new Error("Service is already added to this event.");
        }

        return await prisma.eventService.create({ data });
    } catch (error) {
        throw new Error(`Failed to add service to event: ${error.message}`);
    }
};

// Find event service by composite key
export const findEventServiceById = async (event_id, service_id) => {
    try {
        return await prisma.eventService.findUnique({
            where: {
                event_id_service_id: {
                    event_id: parseInt(event_id),
                    service_id: parseInt(service_id),
                },
            },
            include: {
                event: { select: { event_id: true } },
                service: { select: { service_id: true } },
            },
        });
    } catch (error) {
        throw new Error(`Failed to find event service by ID: ${error.message}`);
    }
};

// Get all services for an event
export const getAllEventServicesByEvent = async (event_id) => {
    try {
        return await prisma.eventService.findMany({
            where: { event_id: parseInt(event_id) },
            include: {
                event: { select: { event_id: true } },
                service: { select: true },
            },
        });
    } catch (error) {
        throw new Error(`Failed to get all event services for event: ${error.message}`);
    }
};

// Update an event service
export const updateEventService = async (event_id, service_id, data) => {
    try {
        return await prisma.eventService.update({
            where: {
                event_id_service_id: {
                    event_id: parseInt(event_id),
                    service_id: parseInt(service_id),
                },
            },
            data,
        });
    } catch (error) {
        throw new Error(`Failed to update event service: ${error.message}`);
    }
};

// Delete an event service
export const deleteEventService = async (event_id, service_id) => {
    try {
        await prisma.eventService.delete({
            where: {
                event_id_service_id: {
                    event_id: parseInt(event_id),
                    service_id: parseInt(service_id),
                },
            },
        });
    } catch (error) {
        throw new Error(`Failed to delete event service: ${error.message}`);
    }
};