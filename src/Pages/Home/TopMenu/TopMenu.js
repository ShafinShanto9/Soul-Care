import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form, FormControl, Nav } from 'react-bootstrap';

const TopMenu = () => {
    return (
        <Nav className ="bg-secondary d-flex text-center align-items-center justify-content-center text-white p-4">
                <Nav.Item>
                    <Nav.Link className ="mr-4 text-white bold">36D Street Brooklyn, New York</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className ="mr-4 text-white bold">Mon - Fri: 8:00 am - 7:00 pm</Nav.Link>
                </Nav.Item>
                <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button className ="bg-danger text-white border-0 px-3" >Search</Button>
      </Form>
        </Nav>
    );
};

export default TopMenu;