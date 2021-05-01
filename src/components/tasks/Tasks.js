import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, FormControl, FormHelperText, IconButton, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import TasksList from './TasksList';
import { useDispatch, useSelector } from 'react-redux';
import { getTaskDataAction, handleTextChangeAction, storeTaskDataAction } from '../../redux/actions/TaskAction';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
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

    const dispatch = useDispatch();
    const tasks = useSelector(state => state.TaskReducer.tasks);
    const tasksForm = useSelector(state => state.TaskReducer.tasksForm);

    const handleChange = (name, value) => {
        dispatch(handleTextChangeAction(name, value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(storeTaskDataAction(tasksForm));
        handleClose();
    };

    useEffect(() => {
        dispatch(getTaskDataAction());
    }, [tasks]);

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h3 align="right">
                <span style={{ cursor: "pointer", color: "red" }} onClick={handleClose}>X</span>
            </h3>
            <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                <FormControl className={classes.formControl}>
                    <TextField
                        name="Title"
                        value={tasksForm.Title}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                        label="Title"
                        required
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel>Priority</InputLabel>
                    <Select
                        name="Priority"
                        value={tasksForm.Priority}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                    >
                        <MenuItem value={"High"}>High</MenuItem>
                        <MenuItem value={"Medium"}>Medium</MenuItem>
                        <MenuItem value={"Low"}>Low</MenuItem>
                    </Select>
                </FormControl>
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