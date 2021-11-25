import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = ({doctor}) => {
    const {name,img,spaicalist,degree,phone} = doctor
      return (
        <div>
            <Col>
                <Card bg = 'Info p-4 border-0'>
                    <Card.Img  variant="top" src ={img} style = {{backgroundColor: '#6DB3F2', borderRadius:'20px'}} />
                    <Card.Body >
                          <Card.Title>{name}</Card.Title>
                            <Card.Text className = 'text-bold'>
                                {spaicalist}
                             </Card.Text>
                             <p className ='text-danger'>{degree}</p>
                             <p>{phone}</p>
                            </Card.Body>
                </Card>
        </Col>
        </div>
    );
};

export default Doctor;