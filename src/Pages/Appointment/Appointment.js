import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Accordion, Col, Form, Row } from 'react-bootstrap';

const Appointment = () => {
    return (
        <div className = "container mt-5">
             <h1 className = "text-center">Make A Appoinment</h1>
          <Accordion className = 'd-flex align-items-center justify-content-center bg-secondary m-5 p-3 '>
             
            <Accordion.Item className= "mx-3" eventKey = '0'>
                <Accordion.Header>Select Service</Accordion.Header>
                <Accordion.Body className = "w-25">
                        <p>Body Sergery</p>
                        <p>Major Oparetion</p>
                        
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className= "mx-3" eventKey = '1'>
                <Accordion.Header>Select Doctor</Accordion.Header>
                <Accordion.Body className ='w-25 mx-3'>
                <p>David Smith</p>
                <p>Vivi Morean</p>
                
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
         <Form>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="email" placeholder="Enter Phone" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Select Your Date</Form.Label>
                <Form.Control type="date" placeholder="Select Date Time" />
                </Form.Group>

            </Row>
            <Button className='px-4 py-2 bg-danger border-0 text-white' variant="primary" type="submit">
                Make Appoinment
            </Button>
            </Form>
        </div>
    );
};

export default Appointment;