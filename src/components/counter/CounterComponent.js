import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CounterComponent = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const [val, setVal] = useState('');
    console.log(val);

    const handleClick = () => {
        dispatch({ type: "UPDATE", payload: val });
    };

    return (
        <div>
            <h3>
                <Button  variant="outlined" onClick={() => dispatch({ type: "INCREMENT" })}>Plus</Button>
                {counter}
                <Button  variant="outlined" onClick={() => dispatch({ type: "DECREMENT" })}>Minus</Button>
                <br />
                <TextField value={val} onChange={(e) => setVal(e.target.value)} type="text" />
                <Button  variant="outlined" onClick={handleClick}>update</Button>
            </h3>
        </div>
    );
};

export default CounterComponent;