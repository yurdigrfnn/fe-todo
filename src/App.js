import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRouter';
import Login from './features/auth/Login';
import Todo from './features/todo/Todo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
