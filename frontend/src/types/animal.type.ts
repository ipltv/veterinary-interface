import type { EventItem } from "./event.type";

// Animal type definition
export interface Animal {
    id: number;
    name: string;
    species: string;
    birth_date: string | null;
}

// Animal type with associated events
export interface AnimalWithEvents extends Animal {
    events: EventItem[];
}