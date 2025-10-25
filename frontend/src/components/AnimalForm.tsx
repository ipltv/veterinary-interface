import { useState, type FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store';
import { addAnimal } from '../store/animalsSlice';
import { formatDate } from '../utils/formatDate';

// Component to add a new animal
export default function AnimalForm() {
    const dispatch = useDispatch<AppDispatch>();
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [birthDate, setBirthDate] = useState<string>(''); // ISO date string

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!name || !species) return;
        await dispatch(addAnimal({ name, species, birth_date: birthDate || null }));
        setName(''); setSpecies(''); setBirthDate('');
    };

    return (
        <form onSubmit={onSubmit} style={{ display: 'grid', gap: 8, marginTop: 16 }}>
            <h3>Add Animal</h3>
            <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
            <input placeholder="Species" value={species} onChange={e => setSpecies(e.target.value)} required />
            <input type="date" value={formatDate(birthDate)} onChange={e => setBirthDate(e.target.value)} />
            <button type="submit">Create</button>
        </form>
    );
}