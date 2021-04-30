import { DECREMENT, INCREMENT } from "../types/Types";

const initialState = {
    counter: 0,
};

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {

        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
            break;

        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
            break;

        case "UPDATE":
            return {
                ...state,
                counter: state.counter + parseInt(action.payload),
            }
            break;

        default:
            break;
    }
    return state;
};
export default CounterReducer;