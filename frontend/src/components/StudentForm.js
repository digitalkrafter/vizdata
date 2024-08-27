import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const StudentForm = ({
  onSubmit,
  states,
  districts,
  blocks,
  clusters,
  schools,
  initialData = {}
}) => {
  const [state, setState] = useState(initialData.state || '');
  const [district, setDistrict] = useState(initialData.district || '');
  const [block, setBlock] = useState(initialData.block || '');
  const [cluster, setCluster] = useState(initialData.cluster || '');
  const [school, setSchool] = useState(initialData.school || '');
  const [studentNumber, setStudentNumber] = useState(initialData.studentNumber || '');

  useEffect(() => {
    // If initialData changes, update the state
    setState(initialData.state || '');
    setDistrict(initialData.district || '');
    setBlock(initialData.block || '');
    setCluster(initialData.cluster || '');
    setSchool(initialData.school || '');
    setStudentNumber(initialData.studentNumber || '');
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ state, district, block, cluster, school, studentNumber });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Col>
          <Form.Group>
            <Form.Label>State</Form.Label>
            <Form.Control
              as="select"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="">Select State</option>
              {states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>District</Form.Label>
            <Form.Control
              as="select"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            >
              <option value="">Select District</option>
              {districts.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Group>
            <Form.Label>Block/Area</Form.Label>
            <Form.Control
              as="select"
              value={block}
              onChange={(e) => setBlock(e.target.value)}
            >
              <option value="">Select Block/Area</option>
              {blocks.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Cluster</Form.Label>
            <Form.Control
              as="select"
              value={cluster}
              onChange={(e) => setCluster(e.target.value)}
            >
              <option value="">Select Cluster</option>
              {clusters.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Group>
            <Form.Label>School</Form.Label>
            <Form.Control
              as="select"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            >
              <option value="">Select School</option>
              {schools.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Student Number</Form.Label>
            <Form.Control
              type="number"
              value={studentNumber}
              onChange={(e) => setStudentNumber(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <Button variant="primary" type="submit">
        {initialData.studentNumber ? 'Update' : 'Submit'}
      </Button>
    </Form>
  );
};

export default StudentForm;
