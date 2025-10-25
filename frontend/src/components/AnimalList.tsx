import { Link } from 'react-router-dom';
import { useAnimals } from '../hooks/useAnimals';
import { calcAge } from '../utils/calcAge';

/// Component to display a list of animals
export default function AnimalList() {
  // Get the list of animals and their loading status
  const { list, status, error } = useAnimals();

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p style={{ color: 'red' }}>{error}</p>;
  if (!list.length) return <p>No animals yet.</p>;

  return (
    <table width="100%" cellPadding={8} style={{ borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th align="left">Name</th>
          <th align="left">Species</th>
          <th align="left">Birth date</th>
          <th align="left">Age</th>
          <th align="left">Details</th>
        </tr>
      </thead>
      <tbody>
        {list.map(a => (
          <tr key={a.id} style={{ borderTop: '1px solid #ddd' }}>
            <td>{a.name}</td>
            <td>{a.species}</td>
            <td>{a.birth_date || undefined}</td>
            <td>{calcAge(a.birth_date)}</td>
            <td><Link to={`/animals/${a.id}`}>Open</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
