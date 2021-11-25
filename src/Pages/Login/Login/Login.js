import React from 'react';
import { Col, Form, Image, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Login.css';

const Login = (props) => {
    console.log(props)
    const {googleSignIn} = useAuth()
    const location = useLocation()
    const history = useHistory()
    const ridirectUrl = location.state?.from || '/home'
    const handleGoogleSignin= () =>{
        googleSignIn()
        .then(result=>{
            history.push(ridirectUrl)
        })
    }
    return (
        <div className ='d-flex banner align-items-center justify-content-center mt-4 p-4'>
            <div className ='w-25'> 
                <Image style={{
                    width :'20%',
                    marginBottom:'45px'
                    }} src={'https://www.pinclipart.com/picdir/middle/127-1279384_health-icons-heartbeat-icon-transparent-background-clipart.png'}/>  
                <span style = {{fontSize:'25px'}}>Soul care</span>
                    
            <Form>
            <Row>
                <Col xs ={12} md ={12}>
                <Form.Control className ='form-style' placeholder="Email" />
                <Form.Control className ='form-style' placeholder="Password" />
                </Col>
            </Row>
            </Form>
            <button className="bg-info" style={{width :'100%', marginTop : '15px',padding:'10px',border:'none',color :'white'}}>Submit</button>
            <Link to ='/signup'>
            <p className='text-danger mt-2' >i have No account</p>
            </Link>
                <button onClick ={handleGoogleSignin}  className='bg-info border-0 px-3 py-2 text-white'>Sign in With Google</button>
        </div>
        </div>
    );
};

export default Login;