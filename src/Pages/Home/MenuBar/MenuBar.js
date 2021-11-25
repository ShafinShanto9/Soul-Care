import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './MenuBar.css';

const MenuBar = () => {
    const {logOut, user} = useAuth();
    return (
        <div>
           <Navbar style ={{fontSize :"25px" ,height:'95px'}} collapseOnSelect expand="lg" bg="light" >
                    <Container>
                    <Navbar.Brand href="/home">
                <img
                    src={'https://www.pinclipart.com/picdir/middle/127-1279384_health-icons-heartbeat-icon-transparent-background-clipart.png'}
                    width="50"
                    height="50"
                    className=""
                    alt="React Bootstrap logo"
                     />
                    <span className = "text-danger"> Soul Care</span>
                     </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                        <NavLink className = 'nav-text' to="/home">Home</NavLink>
                        <NavLink  className = 'nav-text' to="/appointment">Appoinment</NavLink>
                        <NavLink  className = 'nav-text' to="/contact">Contact</NavLink>
                        {
                            user.email? <p className='mx-2'>{user.displayName}</p> : <p></p> 
                        }
                        { user.email? 
                                <Link to="/login">
                                <button onClick={logOut} className="btn btn-danger me-2" >Log-out</button>
                                </Link>
                                :
                                <Link to="/login">
                                <button className="btn btn-danger me-2" >Log In</button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                    </Navbar>
        </div>
    );
};

export default MenuBar;