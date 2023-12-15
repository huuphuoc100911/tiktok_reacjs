import {
    SET_TODO_INPUT,
    ADD_TODO,
    EDIT_TODO,
    DELETE_TODO,
    CHECK_INDEX_EDIT,
} from "./constants";

export const setTodoInput = (payload) => ({
    type: SET_TODO_INPUT,
    payload,
});

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload,
});

export const editTodo = (payload) => ({
    type: EDIT_TODO,
    payload,
});

export const checkIndexEdit = (payload) => ({
    type: CHECK_INDEX_EDIT,
    payload,
});

export const deleteTodo = (payload) => ({
    type: DELETE_TODO,
    payload,
});
