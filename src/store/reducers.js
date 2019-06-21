import { combineReducers } from 'redux';
import StudentReducer from './students/reducer';

export default combineReducers({
    students: StudentReducer
});