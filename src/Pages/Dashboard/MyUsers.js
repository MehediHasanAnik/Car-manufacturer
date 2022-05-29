import React from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const MyUsers = ({ user, refetch }) => {
    const { email, role, _id } = user;


    const makeAdmin = () => {
        fetch(`https://warm-shelf-03881.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success(`successfully made an admin`)
            })
    }
    const confirmDelete = () => {
        fetch(`https://warm-shelf-03881.herokuapp.com/userDelete/${_id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    toast.success(`Order is deleted`);
                    refetch();
                }
            });
    };

    return (
        <div className='container'>


            <tr >

                <td style={{ padding: "20px" }}>{email}</td>
                <td style={{ padding: "20px" }}> {role !== 'admin' && <Button onClick={makeAdmin} variant="secondary" size="sm">
                    Make Admin
                </Button>}</td>
                <td><button onClick={confirmDelete} class=" btn btn-error btn-xs">
                    Delete
                </button></td>
            </tr>

        </div>
    );
};

export default MyUsers;