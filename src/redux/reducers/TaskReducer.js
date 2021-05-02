import * as Types from "../types/Types";
const initialState = {
    tasks: [],
    tasksForm: {
        _id: null,
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

        case Types.GET_SINGLE_DATA:
            return {
                ...state,
                tasksForm: action.payload
            }
            break;

        case Types.NEW_TASK_ADD:
            return {
                ...state,
                state: [action.payload, ...state.tasks],
                tasksForm: {
                    Title: "",
                    Priority: ""
                }
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

        case Types.CHANGE_EDIT_TASK_INPUT:
            const tasksFormEdit = { ...state.tasksForm };
            tasksFormEdit[action.payload.name] = action.payload.value;
            return {
                ...state,
                tasksForm:tasksFormEdit
            }
            break;

        default:
            break;
    }
    return state;
};

export default TaskReducer;