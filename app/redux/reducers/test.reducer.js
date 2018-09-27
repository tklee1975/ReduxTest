
import {TEST_ACTION, TEST_INC_COUNTER} from '../actions/index.actions';

const test = (state = {"msg":""}, action) => {      // the state 'test' managed by this reducer
    switch (action.type) {
        case TEST_ACTION: {
            console.log("MSG: " + action.payload);
            return {...state, "msg" : action.payload};
        }

        case TEST_INC_COUNTER: {
            var newCount = state.counter;
            if(newCount == undefined)  newCount = 1;

            newCount++;

            return {...state, "counter" : newCount};
        }

        default:
            return state;
    }
};

export default test;