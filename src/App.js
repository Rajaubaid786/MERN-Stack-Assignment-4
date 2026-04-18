import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';
import './App.css';

function App() {
  // This is our "database" — just an array living in React state
  const [students, setStudents] = useState([]);

  // This holds what's typed in the form right now
  const [formData, setFormData] = useState({ name: '', rollNo: '', grade: '' });

  // When editing, we store the ID of the student being edited
  const [editingId, setEditingId] = useState(null);

  // ADD or UPDATE student
  const handleSubmit = () => {
    // Validation — don't allow empty fields
    if (!formData.name || !formData.rollNo || !formData.grade) {
      alert('Please fill all fields!');
      return;
    }

    if (editingId !== null) {
      // UPDATE — go through all students, find the one we're editing, replace it
      setStudents(students.map(s =>
        s.id === editingId ? { ...s, ...formData } : s
      ));
      setEditingId(null);
    } else {
      // ADD — create new student with unique ID using Date.now()
      setStudents([...students, { id: Date.now(), ...formData }]);
    }

    // Clear the form after submit
    setFormData({ name: '', rollNo: '', grade: '' });
  };

  // DELETE — filter out the student with this ID
  const handleDelete = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  // EDIT — fill the form with this student's data
  const handleEdit = (student) => {
    setFormData({ name: student.name, rollNo: student.rollNo, grade: student.grade });
    setEditingId(student.id);
  };

  return (
    <div className="app">
      <h1>Student Record Management System</h1>
      <StudentForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        editingId={editingId}
      />
      <StudentTable
        students={students}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;