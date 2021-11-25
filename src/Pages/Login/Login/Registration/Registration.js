import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import React, { useState } from 'react';
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const Registration = () => {

    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError] = useState('')
    
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordchange = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        if(password.length < 6){
            setError('password Must be 6 Charecters')
            return
        }
        console.log(email,password)  
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          
            const user = userCredential.user;
            console.log(user)
            setError('')
   
            })
    }
    return (
                <div>
                    <div className ='d-flex banner align-items-center justify-content-center'>
                <div className ='w-25 mt-5'> 
                <h1>PLease Registration</h1>
                
                <Form >
                <Row>
                    <Col>
                    <Form.Control className ='form-style'  placeholder="Name" />
                    <Form.Control onBlur = {handleEmailChange} className ='form-style' placeholder="Email" />
                    <p className ='text-danger'>{error}</p>
                    <Form.Control onBlur ={handlePasswordchange} className ='form-style' placeholder="Password" />
                    <Form.Control className ='form-style' placeholder="Confirm password" />   
                    </Col>
                </Row>
                </Form>
                 <button onClick = {handleRegistration} type ='Submit' className="bg-info" style={{width :'100%', marginTop : '15px',padding:'10px',border:'none',color :'white'}}>Submit</button>
                <Link to ='/login'>
                <p className='text-danger mt-2' >Already have an account</p>
                </Link>
                </div>
                </div>
        </div>
    );
};

export default Registration;