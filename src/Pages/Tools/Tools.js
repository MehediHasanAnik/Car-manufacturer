import React, { useEffect, useState } from 'react';

import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch("https://warm-shelf-03881.herokuapp.com/equipments")
            .then((res) => res.json())
            .then((data) => setTools(data));
    }, []);

    return (
        <div>
            <div id="tools" className="">
                <div className=" container">
                    <h1 className=" title text-center  py-3">
                        ALL OF OUR PRODUCTS

                    </h1>
                    <div className="row">
                        {tools.reverse().map((item) => (
                            <Tool key={item._id} item={item}></Tool>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tools;