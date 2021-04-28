import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, IconButton, Typography } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import TasksList from './TasksList';
import { getTasksData, storeTasksData } from '../../services/TasksServices';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const Tasks = () => {
    const classes = useStyles();

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [values, setValues] = useState({
        Title: "",
        Priority: ""
    });

    const handleChange = (e) => {
        const newValues = { ...values };
        newValues[e.target.name] = e.target.value;
        setValues(newValues);
    };

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (values.Priority.length === 0 || values.Title.length === 0) {
            alert("Input Field Empty!")
        } else {
            const isAdded = await storeTasksData(values);
            if (isAdded) {
                handleClose();
                setValues({
                    Title: "",
                    Priority: ""
                });
            }
        }
    };

    const tasks = useSelector(state => state.tasks);

    useEffect(() => {
        initializeData();
    }, [tasks]);

    const initializeData = async () => {
        const data = await getTasksData();
        data.sort();
        data.reverse();
        dispatch({ type: "GET_INITIAL_DATA", payload: data });
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h3 align="right">
                <span style={{ cursor: "pointer", color: "red" }} onClick={handleClose}>X</span>
            </h3>
            <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                <TextField name="Title" onBlur={handleChange} label="Title" required />
                <TextField name="Priority" onBlur={handleChange} label="Priority" required />
                <Button type="submit" style={{ marginTop: "10px" }} variant="outlined" color="primary">
                    Submit
                </Button>
            </form>
        </div>
    );

    return (
        <>
            <Box display="flex">
                <Box width="100%" p={1}>
                    <Typography variant="h5" color="secondary">My Tasks List</Typography>
                </Box>
                <Box p={1}>
                    <IconButton aria-label="delete" color="secondary" onClick={handleOpen}>
                        <AddBoxIcon fontSize="large" />
                    </IconButton>
                </Box>
            </Box>
            <TasksList tasks={tasks} />
            <div>
                <Modal open={open}>
                    {body}
                </Modal>
            </div>
        </>
    );
}
export default Tasks;