import AnimalForm from '../components/AnimalForm';
import AnimalList from '../components/AnimalList';

/// Page to display the animal form and list
export default function AnimalsPage() {
  return (
    <div>
      <AnimalForm />
      <AnimalList />
    </div>
  );
}