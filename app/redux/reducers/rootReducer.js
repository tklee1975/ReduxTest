import {combineReducers} from 'redux';
import test from './test.reducer';
import test2 from './test.reducer';

export default combineReducers({
    test,                // First state named 'test' e.g this.props.state.test
    test2               // Second State named 'test2' e.g this.props.state.test2
});