import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AnimalsPage from '../pages/AnimalsPage';
import AnimalDetailsPage from '../pages/AnimalDetailsPage';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <nav style={{ marginBottom: 16 }}>
                <Link to="/">Animals</Link>
            </nav>
            <Routes>
                <Route path="/" element={<AnimalsPage />} />
                <Route path="/animals/:id" element={<AnimalDetailsPage />} />
            </Routes>
        </BrowserRouter>
    );
}