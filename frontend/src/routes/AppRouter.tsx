import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: 16 }}>
        <Link to="/">Animals</Link>
      </nav>
    </BrowserRouter>
  );
}