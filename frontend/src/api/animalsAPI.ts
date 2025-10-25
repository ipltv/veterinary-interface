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

// POST /animals/:id/events
export async function createEvent(
    id: number,
    payload: { type: string; description: string; event_date: string }
): Promise<Event> {
    const { data } = await api.post(`/animals/${id}/events`, payload);
    return data;
}


// GET /animals/:id/events/export (download Excel)
export async function exportAnimalExcel(id: number): Promise<void> {
    const resp = await api.get(`/animals/${id}/events/export`, { responseType: 'blob' });
    const blob = new Blob([resp.data], { type: resp.headers['content-type'] || 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `events_${id}.xlsx`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}