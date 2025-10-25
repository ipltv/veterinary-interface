
// Event type definition
export interface EventItem {
    id: number;
    animal_id: number;
    type: 'Visit' | 'Treatment' | 'Observation' | string;
    description: string;
    event_date: string; 
}