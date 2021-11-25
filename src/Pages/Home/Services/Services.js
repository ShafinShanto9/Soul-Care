import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [service , setService] = useState([])
    useEffect( () => {
        fetch('/fakedata.json')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div className ="container mt-5">
            <h1 className ="mt-5 text-center">Services We Provided</h1>
           <Row xs={1} md={3} className="g-4 mt-5">
                    {
                        service.map(servicedata => <Service servicedata = {servicedata}></Service>)
                    }
            </Row>
        </div>
    );
};

export default Services;