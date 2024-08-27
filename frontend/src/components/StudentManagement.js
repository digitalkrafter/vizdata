import React, { useState } from 'react';
import StudentForm from './StudentForm';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';

const StudentManagement = () => {
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  const states = ['State 1', 'State 2', 'State 3'];
  const districts = ['District 1', 'District 2', 'District 3'];
  const blocks = ['Block 1', 'Block 2', 'Block 3'];
  const clusters = ['Cluster 1', 'Cluster 2', 'Cluster 3'];
  const schools = ['School 1', 'School 2', 'School 3'];

  const handleAddOrUpdateStudent = (student) => {
    if (editingIndex !== null) {
      // Update existing student
      const updatedStudents = students.map((s, index) =>
        index === editingIndex ? student : s
      );
      setStudents(updatedStudents);
      setEditingIndex(null);
    } else {
      // Add new student
      setStudents([...students, student]);
    }
    setCurrentStudent(null); // Reset the form
  };

  const handleEditStudent = (index) => {
    setCurrentStudent(students[index]);
    setEditingIndex(index);
  };

  const handleDeleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  const handleCancelEdit = () => {
    setCurrentStudent(null);
    setEditingIndex(null);
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h1>Student Management</h1>
          <StudentForm
            onSubmit={handleAddOrUpdateStudent}
            states={states}
            districts={districts}
            blocks={blocks}
            clusters={clusters}
            schools={schools}
            initialData={currentStudent || {}}
          />
          {editingIndex !== null && (
            <Button variant="secondary" className="mt-2" onClick={handleCancelEdit}>
              Cancel Edit
            </Button>
          )}
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Student List</h2>
          <ListGroup>
            {students.map((student, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                {student.studentNumber} students at {student.school} ({student.cluster}, {student.block}, {student.district}, {student.state})
                <div>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEditStudent(index)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeleteStudent(index)}
                  >
                    Delete
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentManagement;
