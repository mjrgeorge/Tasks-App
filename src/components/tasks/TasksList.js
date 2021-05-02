import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deleteTaskDataAction, getSingleTaskDataAction } from '../../redux/actions/TaskAction';
import ModalForm from './ModalForm';

const StyledTableCell = withStyles((theme) => ({
    head: {
        fontSize: 20,
        fontWeight: "700"
    },
    body: {
        fontSize: 18,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 350,
    }
}));


const TasksList = ({ tasks }) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const handleUpdate = (id) => {
        dispatch(getSingleTaskDataAction(id));
    };

    const handleDelete = (id) => {
        dispatch(deleteTaskDataAction(id));
    };

    return (
        <>
            <TableContainer>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">#</StyledTableCell>
                            <StyledTableCell align="center">ID</StyledTableCell>
                            <StyledTableCell align="center">Task Title</StyledTableCell>
                            <StyledTableCell align="center">Priority</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks.map((task, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell align="center">{index + 1}</StyledTableCell>
                                <StyledTableCell align="center">{task._id}</StyledTableCell>
                                <StyledTableCell align="center" component="th" scope="row"> {task.Title} </StyledTableCell>
                                <StyledTableCell align="center">{task.Priority}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <IconButton onClick={() =>handleUpdate(`${task._id}`)} color="primary">
                                        <ModalForm />
                                    </IconButton>
                                    <IconButton onClick={() => handleDelete(`${task._id}`)} color="secondary">
                                        <DeleteIcon />
                                    </IconButton>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
export default TasksList;