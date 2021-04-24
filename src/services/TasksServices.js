const axios = require('axios');
export const getTasksData = async () => {
    let data = [];
    await axios.get("https://todo-app37.herokuapp.com/loadTodo")
        .then(result => {
            data = result.data;
        })
    return data;
};

export const storeTasksData = async (data) => {
    let isAdded = false;
    await axios.post("https://todo-app37.herokuapp.com/addTodo", data)
        .then(result => {
            if (result) {
                isAdded = true;
            }
        })
    return isAdded;
};