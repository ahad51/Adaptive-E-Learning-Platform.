import logo from './logo.svg';
import Signup from './Components/Main Components/Signup/Signup';
import Login from './Components/Main Components/Login/Login';
import ResetPassword from './Components/Main Components/Reset Password/ResetPassword';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Login />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
      </Router>
  );
}

export default App;
