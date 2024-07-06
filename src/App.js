import logo from './logo.svg';
import Signup from './Components/Main Components/Signup/Signup';
import Login from './Components/Main Components/Login/Login';
import ResetPassword from './Components/Main Components/Reset Password/ResetPassword';
import ForgetPassword from './Components/Main Components/Forget Password/ForgetPassword';
import Dashboard from './Components/Main Components/Dashboard/Dashboard';
import Courses from './Components/Main Components/Courses/Courses';
import Question from './Components/Main Components/QuizQuestion/quizQuestion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Quiz from './Components/Quiz/Quiz';
import Video from './Components/Video Lecture/Video';
import Advisor from './Components/Advisor/Advisor';
import AdvisorDashboard from "./Components/Main Components/AdvisorDashboard/AdvisorDashboard"
import AdvisorSts from "./Components/Main Components/AdvisorDashboard/AdvisorSts"
import AdvisorLogin from './Components/Main Components/AdvisorLogin/AdvisorLogin';
import AdvisorDashboardEmpty from "./Components/Main Components/AdvisorDashboardEmpty/AdvisorDashboardEmpty"


function App() {
  
  return (
    <Router>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Login />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/question" element={<Question />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/video" element={<Video/>} />
      <Route path="/advisor" element={<Advisor/>} />
      <Route path="/advisorDashboard" element={<AdvisorDashboard/>} />
      <Route path="/advisorSts" element={<AdvisorSts/>} />
      <Route path="/advisorLogin" element={<AdvisorLogin/>} />
      <Route path="/AdvisorDashboardEmpty" element={<AdvisorDashboardEmpty/>} />

      </Routes>
      </Router>
  );
}
export default App;
