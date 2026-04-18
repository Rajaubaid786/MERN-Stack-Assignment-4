import React from 'react';

// We receive these from App.jsx as props
function StudentForm({ formData, setFormData, handleSubmit, editingId }) {
  return (
    <div className="form-container">
      <h2>{editingId !== null ? 'Edit Student' : 'Add Student'}</h2>

      {/* Controlled input — value always comes from React state */}
      <input
        type="text"
        placeholder="Student Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      <input
        type="text"
        placeholder="Roll Number"
        value={formData.rollNo}
        onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
      />

      <input
        type="text"
        placeholder="Grade"
        value={formData.grade}
        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
      />

      <button onClick={handleSubmit}>
        {editingId !== null ? 'Update Student' : 'Add Student'}
      </button>
    </div>
  );
}

export default StudentForm;