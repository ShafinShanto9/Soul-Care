import React, { useEffect, useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {serviceID} = useParams()
    const [serviceDetails , setServiceDetails] = useState([])
    useEffect(() => {
        fetch('/fakedata.json')
        .then(res => res.json())
        .then(data => setServiceDetails(data))
    },[])
    
    const itemFound = serviceDetails.filter(details => details.id === serviceID)
    console.log(itemFound)
    
     return (
        <div className = "container">
             <Row className = 'd-flex text-center align-items-center justify-content-center bg-secondary mt-5 p-3 text-white'>
                <Col xs = {1} md = {5}>
                   <Image src = {itemFound[0]?.image}></Image>
                </Col>
                <Col xs = {1} md = {6}>
                    <h1>{itemFound[0]?.name}</h1>
                    <p>{itemFound[0]?.details}</p>
                </Col>
                
            </Row>
        </div>
    );
};

export default ServiceDetails;