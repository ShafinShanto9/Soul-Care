import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Row className = ' text-center align-items-center justify-content-center bg-secondary mt-5 p-3 text-white'>
                <Col xs = {12} md = {5}>
                    <div>
                        <h2>About Us</h2>
                        <p>Energistically reintermediate worldwide interfaces vis-a-vis emerging integrate leadership skills.</p>
                        <p>693 2325 12456</p>
                    </div>
                </Col>
                <Col xs = {12} md = {5}>
                    <div>
                        <h2>Services</h2>
                        <p>Body Sergery</p>
                        <p>Major Oparetion</p>
                        <p>Child Care</p>
                        <p>Heart Surgerry</p>
                        <p>Mental Health</p>
                        <p>Urgent Care</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;