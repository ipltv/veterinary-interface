// backend/src/services/events.service.ts
import { eventsModel } from '../model/events.model.js';
import type { EventDB } from '../types/db/events.type.js';

// Service layer for managing event-related operations.
export const eventsService = {
    async createEvent(eventData: Omit<EventDB, 'id'>): Promise<EventDB> {
        console.log('Creating event with data:', eventData);
        return eventsModel.create(eventData);
    },

    async getEventsByAnimalId(animalId: number): Promise<EventDB[]> {
        return eventsModel.findByAnimalId(animalId);
    },
};
