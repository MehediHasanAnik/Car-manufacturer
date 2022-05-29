import React from 'react';
import { Button } from 'react-bootstrap';
import "../Summery/Summery.css"


const Summery = () => {
    return (
        <div className="container summery text-center">
            <div className="summery-section ">
                <h2 className='text-primary new'>Million People Trust Us In Building Their Life</h2>
                <div className="row mt-4">
                    <div className="col-md-3  ">
                        <div className="icon">
                            <i style={{ fontSize: '50px', color: '#2E7435' }} class="fa-solid fa-flag"></i>
                            <h3>50 +</h3>
                            <h3>Countries</h3>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <div className="icon">
                            <i style={{ fontSize: '50px', color: '#2E7435' }} class="fa-solid fa-diagram-project"></i>
                            <h3>54 +</h3>
                            <h3>Projects</h3>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="icon">
                            <i style={{ fontSize: '50px', color: '#2E7435' }} class="fa-solid fa-people-group"></i>
                            <h3>54 +</h3>
                            <h3>Supporters</h3>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="icon">
                            <i style={{ fontSize: '50px', color: '#2E7435' }} class="fa-solid fa-comment"></i>
                            <h3>54 +</h3>
                            <h3>Comments</h3>
                        </div>
                    </div>


                </div>
                <div className="second-section">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className='title'>Do You Have Any Questions?</h2>
                            <h3 className='title-two'>Feel Free To Ask</h3>
                        </div>
                        <div className="col-md-6 mt-5">
                            <a
                                className="btn btn-primary px-5 py-2"
                                href="https://perfume-bd.com/"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summery;