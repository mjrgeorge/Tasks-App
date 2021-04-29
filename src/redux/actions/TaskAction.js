import axios from "axios";

export const getTaskDatAction = () => (dispatch) => {
    axios.get("https://todo-app37.herokuapp.com/loadTodo")
        .then(response => {
            const data = response.data;
            data.sort();
            data.reverse();
            dispatch({ type: "GET_INITIAL_DATA", payload: data });
        })
};
