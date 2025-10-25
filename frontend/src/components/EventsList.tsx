import type { EventItem } from '../types/index.type';

/// Component to display a list of events
export default function EventList({ events }: { events: EventItem[] }) {
    if (!events?.length) return <p>No events yet.</p>;
    // Sort events by date in descending order
    const sorted = [...events].sort((a, b) => new Date(b.event_date).getTime() - new Date(a.event_date).getTime());

    return (
        <table width="100%" cellPadding={8} style={{ borderCollapse: 'collapse', marginTop: 8 }}>
            <thead>
                <tr>
                    <th align="left">Type</th>
                    <th align="left">Description</th>
                    <th align="left">Date</th>
                </tr>
            </thead>
            <tbody>
                {sorted.map(ev => (
                    <tr key={ev.id} style={{ borderTop: '1px solid #ddd' }}>
                        <td>{ev.type}</td>
                        <td>{ev.description}</td>
                        <td>{ev.event_date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
