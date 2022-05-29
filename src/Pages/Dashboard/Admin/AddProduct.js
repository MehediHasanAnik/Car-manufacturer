
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loading from "../../Loading/Loading";

const AddProduct = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const imageStorageKey = process.env.REACT_APP_IMAGE_API_KEY;

    const onSubmit = async (inputData) => {
        setIsLoading(true);

        const image = inputData.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const URL = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(URL, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: inputData.name,
                        price: inputData.price,
                        description: inputData.description,
                        available_quantity: inputData.available_quantity,
                        minimum_order: inputData.minimum_order,
                        img: img
                    }
                    // send to your database 
                    fetch('https://warm-shelf-03881.herokuapp.com/add-post', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                setIsLoading(false);

                                toast.success('Product added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the product');
                            }
                        })

                }

            })
    };
    if (isLoading) {
        return <Loading />;
    }
    return (
        <div className="row justify-content-center">
            <div className="col-lg-7">
                <h2 className="">Add a New Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control  ">
                        <label className="label">
                            <span className="label-text">Product name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Name"
                            className="input form-control  "
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Product name is Required",
                                },
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.name.message}
                                </span>
                            )}
                        </label>
                    </div>

                    <div className="form-control  ">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Description"
                            className="input form-control  "
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: "Description is Required",
                                },
                            })}
                        />
                        <label className="label">
                            {errors.description?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.description.message}
                                </span>
                            )}
                        </label>
                    </div>

                    <div className="form-control  ">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter quantity"
                            className="input form-control  "
                            {...register("available_quantity", {
                                required: {
                                    value: true,
                                    message: "Available quantity is Required",
                                },
                            })}
                        />
                        <label className="label">
                            {errors.available_quantity?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.available_quantity.message}
                                </span>
                            )}
                        </label>
                    </div>
                    <div className="form-control  ">
                        <label className="label">
                            <span className="label-text">Minimum order quantity</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter minimum order quantity"
                            className="input form-control  "
                            {...register("minimum_order", {
                                required: {
                                    value: true,
                                    message: "Minimum order quantity is Required",
                                },
                            })}
                        />
                        <label className="label">
                            {errors.minimum_order?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.minimum_order.message}
                                </span>
                            )}
                        </label>
                    </div>
                    <div className="form-control  ">
                        <label className="label">
                            <span className="label-text">Product price</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product price"
                            className="input form-control  "
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: "Product price is Required",
                                },
                            })}
                        />
                        <label className="label">
                            {errors.price?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.price.message}
                                </span>
                            )}
                        </label>
                    </div>

                    <div className="form-control  ">
                        <label className="label">
                            <span className="label-text">Upload product photo</span>
                        </label>
                        <input
                            type="file"
                            className="input form-control  "
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: "Image is Required",
                                },
                            })}
                        />
                        <label className="label">
                            {errors.image?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.image.message}
                                </span>
                            )}
                        </label>
                    </div>

                    <input className="btn btn-primary" type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
