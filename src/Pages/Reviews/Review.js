import React from 'react';

const Review = ({ item }) => {
    const { _id, name, rating, comment } = item;
    return (
        <div id="expert" className=" col-sm-12 col-md-6 col-lg-4">
            <div className="card mb-5">

                <div className="card-body">
                    <h5 className="card-title">{name}</h5>

                    <p>Rating: {rating}</p>
                    <p>Comment: {comment}</p>

                </div>
            </div>
        </div>
    );
};

export default Review;