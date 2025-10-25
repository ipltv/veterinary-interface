
// Event type definition
export interface Event {
    id: number;
    animal_id: number;
    type: 'Visit' | 'Treatment' | 'Observation' | string;
    description: string;
    event_date: string; 
}