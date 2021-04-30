import * as Types from "../type/Types";
const initialState = {
    tasks: []
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

        default:
            break;
    }
    return state;
};

export default TaskReducer;