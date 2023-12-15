import { useReducer, useRef } from "react";

// useState
// 1. Init state: 0
// 2. Action: Up (state + 1) / Down (state - 1)

// useReducer
// 1. Init state: 0
// 2. Action: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch

// Init State
const initState = {
    job: "",
    jobs: [],
};

// Action
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload: payload,
    };
};

const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload: payload,
    };
};

const deleteJob = (payload) => {
    return {
        type: DELETE_JOB,
        payload: payload,
    };
};

const reducer = (state, action) => {
    console.log("Action", action);
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload,
            };
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload],
            };
        case DELETE_JOB:
            const newJob = [...state.jobs];
            newJob.splice(action.payload, 1);
            return {
                ...state,
                jobs: newJob,
            };
        default:
            throw new Error("Invalid action");
    }
};

function App() {
    const [state, dispatch] = useReducer(reducer, initState);

    const { job, jobs } = state;

    const inputRef = useRef();

    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob(""));
        inputRef.current.focus();
    };

    return (
        <div style={{ padding: "10px 32px" }}>
            <h1>Todo</h1>
            <input
                ref={inputRef}
                value={job}
                placeholder="Enter todo"
                onChange={(e) => dispatch(setJob(e.target.value))}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => dispatch(deleteJob(index))}>
                            &times;
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
