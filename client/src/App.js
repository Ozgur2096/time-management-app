import './App.css';
import { LoginSignup } from './pages/LoginSignup';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginSignup />} />
    </Routes>
  );
}

export default App;
