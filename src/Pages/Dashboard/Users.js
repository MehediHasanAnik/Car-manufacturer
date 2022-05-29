import React from 'react';
import { Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import MyUsers from './MyUsers';


const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://warm-shelf-03881.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className='text-center mt-4'>All Users {users.length}</h2>

            <Table >
                <thead>
                    <tr>

                        <th>Email</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <MyUsers
                            key={user._id}
                            user={user}
                            refetch={refetch}
                        >

                        </MyUsers>)
                    }
                </tbody>
            </Table>

        </div>
    );
};

export default Users;