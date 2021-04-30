import React, { useState } from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT, INCREMENT } from '../../redux/types/Types';

const CounterComponent = () => {
    const counter = useSelector(state => state.CounterReducer.counter);
    const dispatch = useDispatch();
    const [val, setVal] = useState('');

    const handleClick = () => {
        dispatch({ type: "UPDATE", payload: val });
        setVal("");
    };

    return (
        <Box align="center" display="block" p={1} m={1}>
            <Button variant="contained" color="primary" onClick={() => dispatch({ type: INCREMENT })}>Plus</Button>
            <Button variant="outlined">{counter}</Button>
            <Button variant="contained" color="secondary" onClick={() => dispatch({ type: DECREMENT })}>Minus</Button>
            <TextField value={val} onChange={(e) => setVal(e.target.value)} type="text" />
            <Button onClick={handleClick}>Update</Button>
        </Box>
    );
}

export default CounterComponent;