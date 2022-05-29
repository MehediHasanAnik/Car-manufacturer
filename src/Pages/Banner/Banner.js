import React from 'react';
import "../Banner/Banner.css"
const Banner = () => {
    return (
        <div className='banner'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-10">
                        <div className="main-content">
                            <div className="banner-content ">
                                <h1 className='title text-white'>
                                    Best Parts For Your Cars
                                </h1>
                                <p className="car-text">ALL KINDS OF PARTS THAT YOU
                                    NEED CAN FIND HERE</p>
                                <p className="perfume-desp ">
                                    It designs and manufactures passenger vehicles, trucks, and light commercial vehicles including buses. The Tiguan, Golf, Jetta, Passat, and other Volkswagen cars are among them. Due to dwindling demand for smaller automobiles, Volkswagen discontinued producing its once-popular Volkswagen
                                </p>
                                <a
                                    className="btn btn-primary px-5 py-2"
                                    href="https://perfume-bd.com/"
                                >
                                    Explore More
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Banner;