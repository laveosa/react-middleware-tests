import { ADD_STUDENT, MANAGE_STUDENT, REMOVE_STUDENT } from './action';

const innerState = {
    students: []
};

export default (state = innerState, action) => {
    switch (action.type) {
        case ADD_STUDENT:
            return Object.assign({}, state, {
                students: [...state.students, action.payload]
            });
        case MANAGE_STUDENT:
            return Object.assign({}, state, {
                students: state.students.filter((student, index) => (index === action.payload.index) ? action.payload.student : student)
            });
        case REMOVE_STUDENT:
            return Object.assign({}, state, {
                student: state.students.splice(action.payload, 1)
            });
        default:
            return state;
    };
};