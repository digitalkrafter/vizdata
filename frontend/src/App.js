import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes, Navigate
} from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import StudentManagement from "./components/StudentManagement";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/studentdashboard" element={ <StudentManagement />} />
     
    </Routes>
  </Router>
  );
}

export default App;
