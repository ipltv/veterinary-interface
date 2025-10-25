// backend/src/services/animals.service.ts
import { animalsModel } from "../model/animals.model.js";
import type { AnimalDB } from '../types/db/animals.type.js';

/**
 * Service layer for animal-related operations.
 */

export const animalsService = {
    async getAllAnimals(): Promise<AnimalDB[]> {
        return animalsModel.getAll() as Promise<AnimalDB[]>;
    },
    async getAnimalById(id: number): Promise<AnimalDB> {
        return animalsModel.getById(id) as Promise<AnimalDB>;
    },
    async createAnimal(animal: Omit<AnimalDB, 'id'>): Promise<AnimalDB> {
        if (new Date(animal.birth_date) > new Date()) {
            throw { status: 400, message: 'birth_date cannot be in the future' };
        }
        return animalsModel.create(animal);
    },
};