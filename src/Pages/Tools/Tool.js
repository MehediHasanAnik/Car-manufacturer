import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Tool = ({ item }) => {
    const navigate = useNavigate()
    const { _id, name, price, img, description, available_quantity, minimum_order } = item;
    const handlePurchase = () => {
        navigate(`/tool/${_id}`)
    }
    return (
        <div id="expert" className=" col-sm-12 col-md-6 col-lg-4">
            <div className="card mb-5">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Minimum Order Quantity: {minimum_order}</p>
                    <p className="card-text ">Available Quantity: {available_quantity}</p>
                    <p>Price: ${price}</p>
                    <Button style={{ padding: "5px 20px", borderRadius: "5px" }} onClick={handlePurchase} className="btn btn-primary">
                        Purchase
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Tool;