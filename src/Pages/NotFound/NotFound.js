import React from 'react';
import { Image } from 'react-bootstrap';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className ="container">
            <div>
            <Image className="errorImg" src = 'https://i.ibb.co/w0fMzhX/error.jpg'></Image>
            </div>
        </div>
    );
};

export default NotFound;