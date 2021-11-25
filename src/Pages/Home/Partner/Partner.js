import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import "./Partner.css";

const Partner = () => {
    return (
        <>
        <h2 className ="text-center mt-5">Our Partners</h2>
        <div className ="brand container d-flex text-center align-items-center justify-content-center  mt-5 p-3 ">
            <Row>
            <Col xs ={12} md={2} className = "m-5">
                <Image src = "https://i.ibb.co/wsxHF21/brand-1-5.png"></Image>
            </Col>
            <Col xs ={12} md ={2} className = "m-5 ">
                <Image src = "https://i.ibb.co/jgnhbrF/brand-1-4.png"></Image>
            </Col>
            <Col xs ={12} md = {2} className = "m-5">
                <Image src = "https://i.ibb.co/PDwYwgM/brand-1-3.png"></Image>
            </Col>
            <Col xs ={12} md ={2} className = "m-5">
                <Image src = "https://i.ibb.co/j5KSQt8/brand-1-1.png"></Image>
            </Col>
            <Col xs ={12} md={2} className = "m-5">
                <Image src = "https://i.ibb.co/3kYDtkz/brand-1-2.png"></Image>
            </Col>
            </Row>
        </div>
        </>
    );
};

export default Partner;