import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes, Navigate
} from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import StudentManagement from "./components/StudentManagement";
import Barchart from "./components/Barchart";

function App() {
  
  const data = [
  { teacher: 'Teacher A', students: 30 },
  { teacher: 'Teacher B', students: 25 },
  { teacher: 'Teacher C', students: 40 },
  { teacher: 'Teacher D', students: 35 },
  { teacher: 'Teacher E', students: 20 },
];
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/studentdashboard" element={ <StudentManagement />} />
      <Route path="/Barchart" element={ <Barchart data={data} />} />
     
    </Routes>
  </Router>
  );
}

export default App;
