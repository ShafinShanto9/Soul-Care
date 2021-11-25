import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Partner from '../Partner/Partner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
        <Banner></Banner>
        <Services></Services>
        <Doctors></Doctors>
        <Partner></Partner>
        </>
    );
};

export default Home;