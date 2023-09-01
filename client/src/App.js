import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginSignup } from './pages/LoginSignup';
import { Dashboard } from './pages/Dashboard';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { auth } = useAuthContext();
  console.log(auth);
  return (
    <Routes>
      <Route path='/' element={<LoginSignup />} />
      <Route
        path='/dashboard'
        element={auth ? <Dashboard /> : <Navigate to='/' />}
      />
    </Routes>
  );
}

export default App;
