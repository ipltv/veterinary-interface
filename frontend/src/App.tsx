import './App.css'
import AppRouter from './routes/AppRouter.tsx';

function App() {

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: 16 }}>
      <h1>Veterinary Interface</h1>
      <AppRouter />
    </div>
  )
}

export default App
