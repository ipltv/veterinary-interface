// backend/src/services/animals.service.ts
import { animalsModel } from "../model/animals.model.js";
import type { AnimalDB, AnimalWithEventsDB } from '../types/db/animals.type.js';
import { eventsService } from "./events.service.js";

/**
 * Service layer for animal-related operations.
 */

export const animalsService = {
    async getAllAnimals(): Promise<AnimalDB[]> {
        return animalsModel.getAll() as Promise<AnimalDB[]>;
    },
    async getAnimalById(id: number): Promise<AnimalWithEventsDB> {
        const    animal = await animalsModel.getById(id);
        if (!animal) {
            throw { status: 404, message: `Animal with id ${id} not found` }; // Not Found
        }
        // Fetch associated events
        const events = await eventsService.getEventsByAnimalId(id);
        return { ...animal, events } as AnimalWithEventsDB;
    },
    async createAnimal(animal: Omit<AnimalDB, 'id'>): Promise<AnimalDB> {
        if (new Date(animal.birth_date || '') > new Date()) {
            throw { status: 400, message: 'birth_date cannot be in the future' };
        }
        return animalsModel.create(animal);
    },
};