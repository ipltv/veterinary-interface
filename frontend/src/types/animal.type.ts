export interface Animal {
    id: number;
    name: string;
    species: string;
    birth_date: Date | null;
}

export interface AnimalWithEvents extends Animal {
    events: Event[];
}