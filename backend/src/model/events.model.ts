// backend/src/types/db/events.type.ts
import db from '../config/db.js';
import type { EventDB } from '../types/db/events.type.js';

const TABLE_NAME = 'events';

export const eventsModel = {
    /**
     * @description Creates a new event record in the database.
     * @param event - The event data to be inserted (excluding the id).
     * @returns The created event record with its assigned id.
     */
    async create(event: Omit<EventDB, 'id'>): Promise<EventDB> {
        const [createdEvent] = await db<EventDB>(TABLE_NAME)
            .insert(event)
            .returning(['id', 'animal_id', 'type', 'description', 'event_date']);
        return createdEvent as EventDB;
    },

    /**
     * @description Finds all events associated with a specific animal.
     * @param animalId - The ID of the animal whose events are to be retrieved.
     * @returns An array of event records associated with the specified animal.
     */
    async findByAnimalId(animalId: number): Promise<EventDB[]> {
        return db<EventDB>(TABLE_NAME).where({ animal_id: animalId });
    }
}