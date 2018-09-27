
import {TEST_ACTION} from '../actions/index.actions';

const test = (state = {"test":""}, action) => {      // the state 'test' managed by this reducer
    switch (action.type) {
        case TEST_ACTION: {
            return action.payload;
        }
        default:
            return state;
    }
};

export default test;