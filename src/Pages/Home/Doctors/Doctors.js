import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctor, setDoctor] = useState([])
    useEffect(()=>{
        fetch('/fakedoctor.json')
        .then(res =>res.json())
        .then(data => setDoctor(data))
    },[])    
    return (
        <div className ="container mt-5">
        <h1 className ="mt-5 text-center">Meet Our Doctors</h1>
       <Row xs={1} md={3} className="g-4 mt-5">
                {
                    doctor.map(doctor => <Doctor doctor = {doctor}></Doctor>)
                }
        </Row>
    </div>
    );
};

export default Doctors;