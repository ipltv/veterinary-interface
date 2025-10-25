import AnimalForm from '../components/AnimalForm';
import AnimalList from '../components/AnimalList';

/// Page to display the animal form and list
export default function AnimalsPage() {
    return (
        <div>
            <AnimalForm />
            <hr style={{ margin: '16px 0' }} />
            <h2>Animals</h2>
            <AnimalList />
        </div>
    );
}