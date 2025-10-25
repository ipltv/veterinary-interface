import axios from 'axios';
import type { Animal, AnimalWithEvents } from '../types/index.type';


const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: { 'Content-Type': 'application/json' }
});

// GET /animals
export async function fetchAnimals(): Promise<Animal[]> {
    const { data } = await api.get('/animals');
    return data;
}

// POST /animals
export async function createAnimal(payload: Omit<Animal, 'id'>): Promise<Animal> {
    const { data } = await api.post('/animals', payload);
    return data;
}

// GET /animals/:id
export async function fetchAnimalById(id: number): Promise<AnimalWithEvents> {
    const { data } = await api.get(`/animals/${id}`);
    return data;
}