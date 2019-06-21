export const ADD_STUDENT = "ADD_STUDENT";
export const MANAGE_STUDENT = "MANAGE_STUDENT";
export const REMOVE_STUDENT = "REMOVE_STUDENT";

export const addStudent = (student) => {
    return {
        type: ADD_STUDENT,
        payload: student
    };
};

export const manageStudent = (student, index) => {
    return {
        type: MANAGE_STUDENT,
        payload: {
            index: index,
            student: student
        }
    };
};

export const removeStudent = (index) => {
    return {
        type: REMOVE_STUDENT,
        payload: index
    };
};