import React from 'react';

function StudentTable({ students, handleEdit, handleDelete }) {
  // If no students yet, show a message
  if (students.length === 0) {
    return <p className="no-records">No students added yet.</p>;
  }

  return (
    <div className="table-container">
      <h2>Student Records</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop through students array and render a row for each */}
          {students.map((student, index) => (
            <tr key={student.id}>  {/* unique key — React needs this! */}
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.rollNo}</td>
<td>
  <span className={`grade-badge grade-${['A','B','C','D','F'].includes(student.grade.toUpperCase()) ? student.grade.toUpperCase() : 'default'}`}>
    {student.grade}
  </span>
</td>              <td>
                <button className="edit-btn" onClick={() => handleEdit(student)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(student.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;