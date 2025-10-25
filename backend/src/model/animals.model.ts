import db from '../config/db.js'
import type { AnimalDB } from '../types/db/animals.type.js';

const TABLE_NAME = 'animals';

export const animalsModel = {
    /**
     * @description Fetches all animal records from the database.
     * @returns An array of animal records or undefined if none found.
     */
    async getAll(): Promise<AnimalDB[] | undefined> {
        return db<AnimalDB>(TABLE_NAME).select('id', 'name', 'species', 'birth_date');
    },

    /**
     * @description Fetches an animal by its ID.
     * @param id The animal ID for lookup.
     * @returns the animal record if found, otherwise undefined.
     */
    async getById(id: number): Promise<AnimalDB | undefined> {
        return db<AnimalDB>(TABLE_NAME).select('id', 'name', 'species', 'birth_date').where({ id }).first();
    },

    /**
     * @description Creates a new animal record in the database.
     * @param animal The animal data to insert, excluding the ID.
     * @returns The created animal record including its ID.
     */
    async create(animal: Omit<AnimalDB, 'id'>): Promise<AnimalDB> {
        const [createdAnimal] = await db<AnimalDB>(TABLE_NAME).insert(animal).returning(['id', 'name', 'species', 'birth_date']);
        return createdAnimal as AnimalDB;
    },
};