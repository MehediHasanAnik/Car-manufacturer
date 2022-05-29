import React from 'react';
import { Button } from 'react-bootstrap';

const LatestTool = () => {
    return (
        <div className='shopping p-5 '>
            <div className="container">
                <div className="title my-3">
                    <h1 className='text-center'>
                        Repairing Your Cars
                    </h1>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="shop-image ">
                            <img className='w-100' src="https://i.ibb.co/kMdtMWR/pexels-malte-luk-2244746.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="shop-details text-center ">
                            <div className="shop-detail-img ">
                                <img className='w-50' src="https://i.ibb.co/VTLVddF/png-transparent-car-rental-vehicle-loan-van-rent-a-car-compact-car-driving-van.png" alt="" />
                            </div>
                            <h2>Keeping Car Active</h2>
                            <p>Modern car engine control systems rely on input from several sensors to regulate the engine’s performance as well as its emissions and other vital functions. When these sensors fail to provide accurate information, the driver may experience increased fuel consumption, driveability problems, emission failures and other problems.
                            </p>
                            <Button className='btn btn-dark button'>Get Repaired</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestTool;