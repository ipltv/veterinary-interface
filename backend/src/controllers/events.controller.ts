import type { Request, Response, NextFunction } from "express";
import { eventsService } from "../services/events.service.js";

export const eventsController = {
    /**
     * @description Creates an event for a specific animal.
     * @param req - The request object containing animal ID and event data.
     * @param res - The response object for sending the result.
     * @param next - The next middleware function for error handling.
     */
    async createEventForAnimal(req: Request, res: Response, next: NextFunction) {
        const animalId = req.params.id;
        const eventData = req.body;

        try {
            const newEvent = await eventsService.createEvent({ ...eventData, animal_id: animalId });
            res.status(201).json(newEvent);
        } catch (error) {
            next({
                status: 500,
                message: 'Error creating event for animal',
                error
            });
        }
    },

    /**
     * @description Retrieves all events for a specific animal.
     * @param req - The request object containing the animal ID.
     * @param res - The response object for sending the result.
     * @param next - The next middleware function for error handling.
     */
    async getEventsByAnimalId(req: Request, res: Response, next: NextFunction) {
        const animalId = req.params.id;
        try {
            const events = await eventsService.getEventsByAnimalId(Number(animalId));
            res.status(200).json(events);
        } catch (error) {
            next({
                status: 500,
                message: 'Error retrieving events for animal',
                error
            });
        }
    },
};