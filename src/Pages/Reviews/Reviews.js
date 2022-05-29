import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://warm-shelf-03881.herokuapp.com/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <div>
            <div id="reviews" className="">
                <div className=" container">
                    <h1 className=" title text-center  py-3">
                        ALL OF OUR PRODUCTS

                    </h1>
                    <div className="row">
                        {reviews.slice(0, 6).map((item) => (
                            <Review key={item._id} item={item}></Review>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;