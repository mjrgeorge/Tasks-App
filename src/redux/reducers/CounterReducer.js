
const initialState = {
    counter: 0,
    tasks: []
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET-COUNTER":
            return {
                ...state,
            }
            break;

        case "INCREMENT":
            return {
                ...state,
                counter: state.counter + 1
            }
            break;

        case "DECREMENT":
            return {
                ...state,
                counter: state.counter - 1
            }
            break;

        case "UPDATE":
            return {
                ...state,
                counter: state.counter + parseInt(action.payload)
            }
            break;

        case "GET_INITIAL_DATA":
            return {
                ...state,
                tasks: action.payload
            }
            break;

        case "NEW_TASK_ADD":
            return {
                ...state,
                tasks: [action.payload, ...state.tasks]
            }
            break;

        default:
            break;
    }
    return state;
};
export default counterReducer;