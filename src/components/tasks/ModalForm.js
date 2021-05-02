import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import { useDispatch, useSelector } from 'react-redux';
import { handleEditTextChangeAction, updateTaskDataAction } from '../../redux/actions/TaskAction'

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

const ModalForm = () => {
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
    const tasksForm = useSelector(state => state.TaskReducer.tasksForm);

    const handleChange = (name, value) => {
        dispatch(handleEditTextChangeAction(name, value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // const taskList = {
        //     Title: "Husna",
        //     Priority: "Rahman",
        // }
        dispatch(updateTaskDataAction(tasksForm._id, tasksForm))
        handleClose();
    };

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
        <div>
            <CreateIcon onClick={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
            >
                {body}
            </Modal>
        </div>
    );
}

export default ModalForm;