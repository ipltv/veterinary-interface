// backend/src/types/db/animals.type.ts

import type { EventDB } from "../index.types.js";

// Represents structure of an animal record in the database.
export interface AnimalDB {
    id: number;
    name: string;
    species: string;
    birth_date?: Date;
}

export interface AnimalWithEventsDB extends AnimalDB {
    events: EventDB[];
}
