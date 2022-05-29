import React from 'react';
import { toast } from 'react-toastify';

const MyProducts = ({ product, setDeleteProduct }) => {
    const { _id, name, price, available_quantity, minimum_order } = product;



    return (
        <tr>


            <td>{name}</td>
            <td>{minimum_order}</td>
            <td>{available_quantity}</td>
            <td>

                <button onClick={() => setDeleteProduct(_id)} type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Delete
                </button>
            </td>

        </tr>
    );
};

export default MyProducts;