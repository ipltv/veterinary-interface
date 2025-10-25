// backend/src/controllers/animals.controller.ts
import type { Request, Response } from 'express';
import { animalsService } from '../services/animals.service.js';

export const animalsController = {
    async getAllAnimals(req: Request, res: Response): Promise<Response> {
        const animals = await animalsService.getAllAnimals();
        return res.status(200).json(animals);
    },

    async getAnimalsById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        if (!id || isNaN(Number(id))) {
            return res.status(400).json({ message: 'Invalid or missing animal ID' });
        }

        const animal = await animalsService.getAnimalById(Number(id));
        if (!animal) {
            return res.status(404).json({ message: `Animal with ID ${id} not found` });
        }

        return res.status(200).json(animal);
    },

    async createAnimal(req: Request, res: Response): Promise<Response> {
        if (!req.body.name || !req.body.species) {
            return res.status(400).json({ message: 'Name and species are required' });
        }

        if (req.body.birth_date && isNaN(Date.parse(req.body.birth_date))) {
            return res.status(400).json({ message: 'Invalid birth_date format' });
        }

        const newAnimal = await animalsService.createAnimal({
            name: req.body.name,
            species: req.body.species,
            birth_date: req.body.birth_date || null,
        });

        return res.status(201).json(newAnimal);
    },
};