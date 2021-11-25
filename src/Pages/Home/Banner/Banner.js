import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Banner.css";

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="banner-img d-block fluid "
                    src="https://i.ibb.co/dpXdnhV/banner1.png "
                    alt="First slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="banner-img d-block fluid"
                        src="https://i.ibb.co/BKd58mH/banner-4.jpg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block banner-img fluid"
                        src="https://i.ibb.co/Y04RsKt/banner3.png"
                        alt="Third slide"
                        />
                     </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default Banner;