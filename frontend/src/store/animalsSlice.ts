import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Animal, AnimalWithEvents } from '../types/index.type';
import { fetchAnimals, createAnimal, fetchAnimalById } from '../api/animalsAPI';

type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

interface AnimalsState {
  list: Animal[];
  listStatus: Status;
  current?: AnimalWithEvents | null;
  currentStatus: Status;
  error?: string | null;
}

const initialState: AnimalsState = {
  list: [],
  listStatus: 'idle',
  current: null,
  currentStatus: 'idle',
  error: null
};

export const loadAnimals = createAsyncThunk('animals/load', async () => fetchAnimals());
export const addAnimal = createAsyncThunk('animals/add', async (payload: Omit<Animal, 'id'>) => createAnimal(payload));
export const loadAnimalById = createAsyncThunk('animals/loadById', async (id: number) => fetchAnimalById(id));


const animalsSlice = createSlice({
  name: 'animals',
  initialState,
  reducers: {
    clearCurrent(state) {
      state.current = null;
      state.currentStatus = 'idle';
      state.error = null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loadAnimals.pending, state => { state.listStatus = 'loading'; })
      .addCase(loadAnimals.fulfilled, (state, action: PayloadAction<Animal[]>) => {
        state.listStatus = 'succeeded';
        state.list = action.payload;
      })
      .addCase(loadAnimals.rejected, (state, action) => {
        state.listStatus = 'failed';
        state.error = action.error.message || 'Failed to load animals';
      });

    builder
      .addCase(addAnimal.fulfilled, (state, action: PayloadAction<Animal>) => {
        state.list.push(action.payload);
      });

    builder
      .addCase(loadAnimalById.pending, state => { state.currentStatus = 'loading'; })
      .addCase(loadAnimalById.fulfilled, (state, action: PayloadAction<AnimalWithEvents>) => {
        state.currentStatus = 'succeeded';
        state.current = action.payload;
      })
      .addCase(loadAnimalById.rejected, (state, action) => {
        state.currentStatus = 'failed';
        state.error = action.error.message || 'Failed to load animal';
      });
  }
});

export const { clearCurrent } = animalsSlice.actions;
export default animalsSlice.reducer;