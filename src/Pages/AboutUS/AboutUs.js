import React from 'react';
import { Button, Card } from 'react-bootstrap';


const AboutUs = () => {
    return (
        <div className='news-section '>
            <div className="container">
                <div className="about-title text-center my-5">
                    <h1>About Us</h1>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Card>
                            <Card.Img variant="top" style={{ height: "300px" }} src="https://i.ibb.co/cJzDcLM/pexels-shane-aldendorff-924676-2.jpg" />
                            <Card.Body>
                                <Card.Title>Best Engine Quality</Card.Title>
                                <Card.Text>
                                    We provide best products and We ensure that no one face any problem using products to build cars.
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <Card.Img variant="top" style={{ height: "300px" }} src="https://i.ibb.co/vZN8kHR/pexels-pixabay-65623-1.jpg" />
                            <Card.Body>
                                <Card.Title>We Design Car Items</Card.Title>
                                <Card.Text>
                                    We design cars parts like new and we design as our clients says and we are here to please them.
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <Card.Img variant="top" style={{ height: "300px" }} src="https://i.ibb.co/FbyC3rs/pexels-mike-b-188777.jpg" />
                            <Card.Body>
                                <Card.Title>We Are Able To Satisfy Our Clients</Card.Title>
                                <Card.Text>
                                    We always get good feedbacks and that inspire us to do more our aboout car build.
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;