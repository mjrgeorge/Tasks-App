import axios from "axios";
import * as Types from "../type/Types";

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
    axios.post("https://todo-app37.herokuapp.com/addTodo", taskItem)
        .then(() => {
            dispatch({ type: Types.NEW_TASK_ADD, payload: taskItem });
        })
};
