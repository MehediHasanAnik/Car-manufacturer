import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ deleteProduct, setDeleteProduct }) => {

    const confirmDelete = () => {
        fetch(`https://warm-shelf-03881.herokuapp.com/productdelete/${deleteProduct}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    toast.success(`Product is deleted`);
                }
            });
    }

    return (
        <div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Are you sure!</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            You want to deleted product!
                        </div>
                        <div class="modal-footer">
                            {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            <button type="button" onClick={confirmDelete} data-bs-dismiss="modal" class="btn btn-primary">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;