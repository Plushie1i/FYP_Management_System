import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
// import StudentDashboard from './components/StudentDashboard';
// import SupervisorDashboard from './components/SupervisorDashboard';
// import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />

         {/* <Route path="/student-dashboard" element={<StudentDashboard />} />
         <Route path="/supervisor-dashboard" element={<SupervisorDashboard />} />
         <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}
       </Routes> 
    </Router>
  );
}

export default App;







// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import SignupForm from './components/SignupForm';
// import LoginForm from './components/LoginForm';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/signup" element={<SignupForm />} />
//         <Route path="/login" element={<LoginForm />} />
//         {/* Uncomment the line below once the signup page works */}
//         {/* <Route path="/" element={<Navigate to="/signup" />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;







// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import SignupForm from './components/SignupForm';
// import ForgotPassword from './components/ForgotPassword';
// import LoginForm from './components/LoginForm';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navigate to="/signup" />} />
//         <Route path="/signup" element={<SignupForm />} />
//         <Route path="/login" element={<LoginForm />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;












// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import SignupForm from './components/SignupForm';
// import LoginForm from './components/LoginForm';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/signup" element={<SignupForm />} />
//         <Route path="/login" element={<LoginForm />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         {/* Uncomment the line below once the signup page works */}
//          <Route path="/" element={<Navigate to="/signup" />} /> 
//       </Routes>
//     </Router>
//   );
// }

// export default App;







