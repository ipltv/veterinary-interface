import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AnimalsPage from '../AnimalsPage';
import AnimalDetailsPage from '../AnimalDetailsPage';

// Main application router
export default function AppRouter() {
    return (
        <BrowserRouter>
            <nav style={{ marginBottom: 16 }}>
                <Link to="/">Main Page</Link>
            </nav>
            <Routes>
                <Route path="/" element={<AnimalsPage />} />
                {/* Animal details page */}
                <Route path="/animals/:id" element={<AnimalDetailsPage />} /> 
            </Routes>
        </BrowserRouter>
    );
}