import * as Types from "../types/Types";
const initialState = {
    tasks: [],
    tasksForm: {
        Title: "",
        Priority: ""
    }
};

function TaskReducer(state = initialState, action) {
    switch (action.type) {

        case Types.GET_INITIAL_DATA:
            return {
                ...state,
                tasks: action.payload
            }
            break;

        case Types.NEW_TASK_ADD:
            return {
                ...state,
                state: [action.payload, ...state.tasks]
            }
            break;

        case Types.CHANGE_TASK_INPUT:
            const tasksForm = { ...state.tasksForm };
            tasksForm[action.payload.name] = action.payload.value;
            return {
                ...state,
                tasksForm
            }
            break;

        default:
            break;
    }
    return state;
};

export default TaskReducer;