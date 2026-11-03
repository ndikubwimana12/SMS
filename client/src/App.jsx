import { useState, useEffect } from "react"
import Layout from "./layout/Layout"
import { Routes, Route } from 'react-router-dom'
import Dashboard from "./pages/Dashboard"
import Students from "./pages/Students"
import AddStudent from "./pages/AddStudent"
import Home from "./pages/Home"
import EditStudent from "./pages/EditStudent"
export default function App() {

  const [students, setStudents] = useState([]);

  // get students from database
  
  const loadStudents = async () => {
    const response = await fetch('http://localhost:5000/students');

    const data = await response.json();

    setStudents(data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <div>
      <Routes>
        <
        <Route path="Home" element={<Layout />}>
          <Route index element={<Dashboard students={ students} />} />
          <Route path="students" element={<Students students={students} />} />
          <Route path="addstudent" element={<AddStudent loadStudents={loadStudents} setStudents={setStudents} />} />
          <Route path="editstudent/:id" element={<EditStudent loadStudents={loadStudents} setStudents={setStudents} />} />

        </Route>

      </Routes>
    </div>
  )
}
