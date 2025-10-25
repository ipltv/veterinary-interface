// backend/src/types/db/events.type.ts

// Represents structure of an event record in the database.

export interface EventDB {
    id: number;
    animal_id: number;
    type: string;
    description: string;
    event_date: string;
}