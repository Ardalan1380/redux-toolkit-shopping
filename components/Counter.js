"use client"

import React, { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { incrementByAmount, selectCounter } from '../redux/featuers/counter/counterSlice';
import { increment  , decrement} from '../redux/featuers/counter/counterSlice';

const Counter = () => {
    const counter = useSelector(selectCounter);
    const dispatch = useDispatch();
    // const [number , setNumber] = useState(1)
    return (
        <div>
            <h2>
            Counter is - {counter}
            </h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            {/* <input type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => dispatch(incrementByAmount(+number))}>incrementByAmount</button> */}
        </div>
    );
};

export default Counter;