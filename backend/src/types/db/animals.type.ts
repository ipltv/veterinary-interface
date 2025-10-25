// backend/src/types/db/animals.type.ts

// Represents structure of an animal record in the database.
export interface AnimalDB {
    id: number;
    name: string;
    species: string;
    birth_date: Date;
}
