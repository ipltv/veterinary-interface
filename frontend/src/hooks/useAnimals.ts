import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';
import { loadAnimals } from '../store/animalsSlice';

/// Custom hook to manage and access animal data from the Redux store
export function useAnimals() {
    const dispatch = useDispatch<AppDispatch>();
    const list = useSelector((s: RootState) => s.animals.list);
    const status = useSelector((s: RootState) => s.animals.listStatus);
    const error = useSelector((s: RootState) => s.animals.error);

    // Load animals when the hook is first used
    useEffect(() => {
        if (status === 'idle') dispatch(loadAnimals());
    }, [status, dispatch]);

    return { list, status, error, reload: () => dispatch(loadAnimals()) };
}
