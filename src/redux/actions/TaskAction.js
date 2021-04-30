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

