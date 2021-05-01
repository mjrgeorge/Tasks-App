import axios from "axios";
import * as Types from "../types/Types";

export const getTaskDataAction = () => (dispatch) => {
    axios.get("https://todo-app37.herokuapp.com/loadTodo")
        .then(response => {
            const data = response.data;
            data.sort();
            data.reverse();
            dispatch({ type: Types.GET_INITIAL_DATA, payload: data });
        })
};

export const getSingleTaskDataAction = (id) => (dispatch) => {
    axios.get(`https://todo-app37.herokuapp.com/deleteTodo?id=${id}`)
        .then(response => {
            const data = response.data;
            dispatch({ type: Types.GET_SINGLE_DATA, payload: data });
        })
};

export const storeTaskDataAction = (taskItem) => (dispatch) => {
    if (taskItem.Title.length === 0 || taskItem.Priority.length === 0) {
        alert("Empty Your TextField");
    } else {
        axios.post("https://todo-app37.herokuapp.com/addTodo", taskItem)
            .then(() => {
                dispatch({ type: Types.NEW_TASK_ADD, payload: taskItem });
            })
    }
};

export const handleTextChangeAction = (name, value) => (dispatch) => {
    const formData = {
        name: name,
        value: value
    }
    dispatch({ type: Types.CHANGE_TASK_INPUT, payload: formData })
};

export const updateTaskDataAction = (id, taskItem) => (dispatch) => {
    console.log('taskItem, id :>> ', taskItem, id);
    axios.patch(`https://todo-app37.herokuapp.com/updateTodo?id=${id}`, taskItem)
        .then(response => {
            if(response.data.modifiedCount){
                alert("Task Successfully Updated")
            }
        })
};

export const deleteTaskDataAction = (id) => (dispatch) => {
    axios.delete(`https://todo-app37.herokuapp.com/deleteTodo?id=${id}`)
        .then(response => {
            if(response.data.deletedCount){
                alert("Successfully Task Deleted")
            }
        })
};