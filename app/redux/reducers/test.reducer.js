
import {TEST_ACTION} from '../actions/index.actions';

const test = (state = {"test":""}, action) => {      // the state 'test' managed by this reducer
    switch (action.type) {
        case TEST_ACTION: {
            console.log("MSG: " + action.payload);
            return {"msg" : action.payload};
        }
        default:
            return state;
    }
};

export default test;