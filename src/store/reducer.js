import {
    SET_TODO_INPUT,
    ADD_TODO,
    EDIT_TODO,
    DELETE_TODO,
    CHECK_INDEX_EDIT,
} from "./constants";

const iniState = {
    todos: [],
    todoInput: "",
    todoEditIndex: null,
};

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload,
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case EDIT_TODO:
            const todos = [...state.todos];
            const { todoEditIndex, todoInput } = action.payload;
            todos[todoEditIndex] = todoInput;

            return {
                ...state,
                todos: todos,
            };
        case CHECK_INDEX_EDIT:
            return {
                ...state,
                todoEditIndex: action.payload,
            };
        case DELETE_TODO:
            const newTodos = [...state.todos];
            newTodos.splice(action.payload, 1);

            return {
                ...state,
                todos: newTodos,
            };
        default:
            throw new Error("Invalid Action.");
    }
}

export { iniState };
export default reducer;
