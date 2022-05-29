import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import MyProducts from './Admin/MyProducts';
import DeleteModal from './DeleteModal';

const ManageProducts = () => {
    const [products, Setproducts] = useState([]);
    const [deleteProduct, setDeleteProduct] = useState([])
    useEffect(() => {
        fetch("https://warm-shelf-03881.herokuapp.com/equipments")
            .then((res) => res.json())
            .then((data) => Setproducts(data));
    }, [products]);
    return (
        <div>
            <h1>manage products {products.length}</h1>

            <Table >
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Minimum Order</th>
                        <th>Available Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <MyProducts
                            key={product._id}
                            product={product}
                            refetch={product}
                            setDeleteProduct={setDeleteProduct}
                        >

                        </MyProducts>)
                    }
                </tbody>
            </Table>
            {deleteProduct && <DeleteModal deleteProduct={deleteProduct} setDeleteProduct={setDeleteProduct}></DeleteModal>}
        </div>
    );
};

export default ManageProducts;