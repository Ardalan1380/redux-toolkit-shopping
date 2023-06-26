"use client"

import React, { use, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { fetchUsers} from '../redux/featuers/users/usersSlice';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    console.log(users)
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            {users.loading ? <h3>Loading...</h3>: null}
            {users.users.length  ? users.users.map((user) => <p>{user.name}</p>) : null}
            
        </div>
    );
};

export default Users;