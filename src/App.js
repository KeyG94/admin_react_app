import React from 'react';
import './sass/style.scss';
import Container from 'react-bootstrap/Container';
import Header from "./components/Header";
import TableList from "./components/Table";
import Features from "./components/Features";
import TabCard from "./components/Tabs";
import FormSubmit from "./components/Form";
import Footer from "./components/Footer";
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';



function App() {
  return (
    <>
    <div className="wrapper">
      <Header/>
      <Container>
      <h3>Users</h3>
        <TableList/>
      <h3>Features</h3>
        <Features/>
        <Container>
          <Row>
            <Col md={6} className="tabs_accordion">
              <TabCard/>
            </Col>
            <Col md={6} className="tabs_tabs">
              <FormSubmit/>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
      <Footer/>
      </>
  );
}

export default App;