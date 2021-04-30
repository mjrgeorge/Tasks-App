import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));


const Header = () => {
    const classes = useStyles();

    const counter = useSelector(state => state.CounterReducer.counter);
    const tasks = useSelector(state => state.TaskReducer.tasks);

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        mjrgeorge
                    </Typography>
                    <Button variant="contained" color="primary">Counter Value: {counter}</Button>
                    <Button variant="contained" color="secondary">Total Tasks: {tasks.length}</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Header;