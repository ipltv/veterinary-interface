import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store/store';
import { clearCurrent, loadAnimalById } from '../store/animalsSlice';
import { calcAge } from '../utils/calcAge';
import { formatDate } from '../utils/formatDate';
import EventList from '../components/EventsList';
import EventForm from '../components/EventForm';
import { exportAnimalExcel } from '../api/animalsAPI';

/// Page to display animal details
export default function AnimalDetailsPage() {
    const params = useParams();
    const id = Number(params.id);
    const dispatch = useDispatch<AppDispatch>();
    const { current, currentStatus, error } = useSelector((s: RootState) => s.animals);

    useEffect(() => {
        // Check if ID is valid (not NaN and not infinite) and load animal
        if (Number.isFinite(id)) dispatch(loadAnimalById(id));
        //Cleanup function
        return () => { dispatch(clearCurrent()); };
    }, [id, dispatch]);

    // Handle various states
    if (!Number.isFinite(id)) return <p>Invalid ID</p>;
    if (currentStatus === 'loading') return <p>Loading...</p>;
    if (currentStatus === 'failed') return <p style={{ color: 'red' }}>{error}</p>;
    if (!current) return <p>Not found</p>;

    return (
        <div>
            <h2>{current.name}</h2>
            <p>
                <b>Species:</b> {current.species}<br />
                <b>Birth date:</b> {formatDate(current.birth_date)} <b>Age:</b> {calcAge(current.birth_date)}
            </p>
            <h3>Events</h3>
            <EventForm animalId={current.id} />
            <button onClick={() => exportAnimalExcel(id)} style={{ marginBottom: 12 }}>
                Download Excel
            </button>
            <EventList events={current.events || []} />
        </div>
    );
}
