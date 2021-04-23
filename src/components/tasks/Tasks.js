import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box, Button, Container, IconButton, Typography } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

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
    table: {
        minWidth: 350,
    },
}));

const Tasks = () => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        const taskData = tasks;
        taskData.push(values);
        setTasks(taskData);

        setOpen(false);
    };

    const [values, setValues] = useState({
            id: 100,
            title: "",
            description: "",
            priority: ""
    });

    const handleChange = (e) => {
        const newValues = { ...values };
        newValues[e.target.name] = e.target.value;
        setValues(newValues);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Information</h2>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField name="title" onChange={handleChange} label="Task" required />
                <TextField name="description" onChange={handleChange} label="Description" required />
                <TextField name="priority" onChange={handleChange} label="Priority" required />
            </form>
            <Button onClick={handleClose} style={{ marginTop: "10px" }} variant="outlined" color="primary">
                Submit
            </Button>
        </div>
    );

    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const fakeData = [
            {
                id: 1,
                title: "First Task",
                description: "This is Task Description",
                priority: "Low"
            },
            {
                id: 2,
                title: "Second Task",
                description: "This is Task Description",
                priority: "Medium"
            },
            {
                id: 3,
                title: "Third Task",
                description: "This is Task Description",
                priority: "Low"
            },
            {
                id: 4,
                title: "Fourth Task",
                description: "This is Task Description",
                priority: "High"
            },
        ];
        setTasks(fakeData);
    }, []);

    return (
        <Container fixed>
            <Box display="flex">
                <Box width="100%" p={2}>
                    <Typography variant="h3">My Tasks</Typography>
                </Box>
                <Box p={2}>
                    <IconButton aria-label="delete" color="secondary" onClick={handleOpen}>
                        <AddBoxIcon fontSize="large" />
                    </IconButton>
                </Box>
            </Box>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Task Title</StyledTableCell>
                            <StyledTableCell align="center">Description</StyledTableCell>
                            <StyledTableCell align="center">Priority</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks.map((task, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row">
                                    {task.title}
                                </StyledTableCell>
                                <StyledTableCell align="center">{task.description}</StyledTableCell>
                                <StyledTableCell align="center">{task.priority}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <IconButton color="primary">
                                        <CreateIcon />
                                    </IconButton>
                                    <IconButton color="secondary">
                                        <DeleteIcon />
                                    </IconButton>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}
                </Modal>
            </div>
        </Container>
    );
}
export default Tasks;