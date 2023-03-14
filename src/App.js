import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRouter';
import Login from './features/auth/Login';
import SignUp from './features/auth/SignUp';
import Todo from './features/todo/Todo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<ProtectedRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
