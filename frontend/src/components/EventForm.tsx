import { useState, type FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store';
import { addEvent, loadAnimalById } from '../store/animalsSlice';

// Possible event types
const EVENT_TYPES = ['Visit', 'Treatment', 'Observation'] as const;


// Component to add a new event for a specific animal
export default function EventForm({ animalId }: { animalId: number }) {
    const dispatch = useDispatch<AppDispatch>();
    const [type, setType] = useState<string>(EVENT_TYPES[0]);
    const [description, setDescription] = useState('');
    const [eventDate, setEventDate] = useState<string>('');

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!description) return;
        await dispatch(addEvent({
            id: animalId,
            type,
            description,
            event_date: eventDate || new Date().toISOString()
        }));
        // Reload animal to get updated events
        await dispatch(loadAnimalById(animalId));
        // Clear form
        setDescription('');
        setEventDate('');
    };

    return (
        <form onSubmit={onSubmit} style={{ display: 'grid', gap: 8 }}>
            <h3>Add Event</h3>
            <select value={type} onChange={e => setType(e.target.value)}>
                {EVENT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
            <input type="datetime-local" value={eventDate} onChange={e => setEventDate(e.target.value)} />
            <button type="submit">Add Event</button>
        </form>
    );
}
