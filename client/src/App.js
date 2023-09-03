import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginSignup } from './pages/LoginSignup';
import { Dashboard } from './pages/Dashboard';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { auth } = useAuthContext();
  return (
    <Routes>
      <Route path='/' element={auth ? <Dashboard /> : <LoginSignup />} />
    </Routes>
  );
}

export default App;
