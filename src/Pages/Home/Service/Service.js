import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({servicedata}) => {
    const {image,description,name,id} = servicedata
    return (
        <div>
             <Col>
                <Card bg = 'Info p-4 border-2'>
                    <Card.Img  variant="top" src ={image} style = {{backgroundColor: '#6DB3F2', borderRadius:'20px'}} />
                    <Card.Body >
                          <Card.Title>{name}</Card.Title>
                            <Card.Text className = 'text-bold'>
                                {description}
                             </Card.Text>
                             <Link to = {`/service/${id}`}>
                             <button className ="bg-danger text-white px-4 py-2 border-0">See More</button>
                             </Link>
                            </Card.Body>
                </Card>
        </Col>
        </div>
    );
};

export default Service;