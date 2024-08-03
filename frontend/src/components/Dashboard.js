import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Table, Button, Nav, Navbar, Dropdown, DropdownButton } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container fluid>
     <Navbar bg="light" expand="lg" className="mb-4">
      <Navbar.Brand href="#" className="mr-auto">Invooce</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="mx-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Invoices</Nav.Link>
          <Nav.Link href="#">Projects</Nav.Link>
          <Nav.Link href="#">Clients</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav className="ml-auto">
        <Nav.Link href="#"><i className="bi bi-search"></i></Nav.Link>
        <Nav.Link href="#"><i className="bi bi-bell"></i></Nav.Link>
        <Nav.Link href="#"><i className="bi bi-person-circle"></i></Nav.Link>
      </Nav>
    </Navbar>
      <Row className="align-items-center mb-4">
        <Col>
          <h2>Overview</h2>
          <p>Here is your stats for today.</p>
        </Col>
        <Col md="auto" className="d-flex align-items-center ">
          <DropdownButton id="dropdown-basic-button" title="Last 30 days" className="mx-1">
            <Dropdown.Item href="#">Last 7 days</Dropdown.Item>
            <Dropdown.Item href="#">Last 30 days</Dropdown.Item>
            <Dropdown.Item href="#">Last 90 days</Dropdown.Item>
          </DropdownButton>
          <Button variant="primary">+ Create Invoice</Button>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Clients</Card.Title>
              <Card.Text>12</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Invoices</Card.Title>
              <Card.Text>14</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Invoiced</Card.Title>
              <Card.Text>$ 65.29K</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Paid</Card.Title>
              <Card.Text>$ 49.34K</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h4>Recent Transactions</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Client</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ebryu Ghundes</td>
                <td className="text-warning">Pending</td>
                <td>$ 2400.00</td>
                <td>17.06.2022</td>
              </tr>
              <tr>
                <td>Monica Garrido</td>
                <td className="text-success">Paid</td>
                <td>$ 945.00</td>
                <td>08.06.2022</td>
              </tr>
              <tr>
                <td>Lucifer Morningstar</td>
                <td className="text-success">Paid</td>
                <td>$ 1800.00</td>
                <td>05.06.2022</td>
              </tr>
              <tr>
                <td>Leonard Cohen</td>
                <td className="text-warning">Pending</td>
                <td>$ 1350.00</td>
                <td>03.06.2022</td>
              </tr>
              <tr>
                <td>Elly West</td>
                <td className="text-warning">Pending</td>
                <td>$ 600.00</td>
                <td>02.06.2022</td>
              </tr>
              <tr>
                <td>Barry Allen</td>
                <td className="text-warning">Pending</td>
                <td>$ 960.00</td>
                <td>19.05.2022</td>
              </tr>
              <tr>
                <td>Xhand Jenner</td>
                <td className="text-success">Paid</td>
                <td>$ 3280.00</td>
                <td>08.05.2022</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col md={6}>
          <h4>Recent Projects</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Project</th>
                <th>Status</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Landing Design</td>
                <td className="text-warning">Ongoing</td>
                <td>Design & Creative</td>
              </tr>
              <tr>
                <td>User Experience Flow</td>
                <td className="text-success">Completed</td>
                <td>Consultancy</td>
              </tr>
              <tr>
                <td>Performance Marketing</td>
                <td className="text-warning">Ongoing</td>
                <td>Marketing</td>
              </tr>
              <tr>
                <td>Rebranding</td>
                <td className="text-warning">Ongoing</td>
                <td>Consultancy</td>
              </tr>
              <tr>
                <td>Landing Design</td>
                <td className="text-success">Completed</td>
                <td>Design & Creative</td>
              </tr>
              <tr>
                <td>Google Ads</td>
                <td className="text-danger">Declined</td>
                <td>Marketing</td>
              </tr>
              <tr>
                <td>Create User Flow</td>
                <td className="text-success">Completed</td>
                <td>Design & Creative</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
