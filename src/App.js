import { useRef } from "react";
import { useStore, actions } from "./store";
import Video from "./Video";

function App() {
    const videoRef = useRef();

    const [state, dispatch] = useStore();
    const { todoInput, todos, todoEditIndex } = state;

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput));
        dispatch(actions.setTodoInput(""));
    };

    const showEdit = (index) => {
        dispatch(actions.checkIndexEdit(index));
        dispatch(actions.setTodoInput(todos[index]));
    };

    const handleEdit = () => {
        dispatch(actions.editTodo({ todoEditIndex, todoInput }));
        dispatch(actions.setTodoInput(""));
        dispatch(actions.checkIndexEdit(null));
    };

    const handlePlay = () => {
        videoRef.current.play();
    };

    const handlePause = () => {
        videoRef.current.pause();
    };

    return (
        <div style={{ padding: 20 }}>
            <Video ref={videoRef} />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
            <div style={{ margin: "200 0 200" }}>
                <input
                    value={todoInput}
                    placeholder="Enter todo..."
                    onChange={(e) => {
                        dispatch(actions.setTodoInput(e.target.value));
                    }}
                />

                {todoEditIndex || todoEditIndex === 0 ? (
                    <button onClick={handleEdit}>Edit</button>
                ) : (
                    <button onClick={handleAdd}>Add</button>
                )}
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <span
                                style={{ color: "blue" }}
                                onClick={() => showEdit(index)}
                            >
                                Sửa
                            </span>
                            <span
                                style={{ color: "red" }}
                                onClick={() =>
                                    dispatch(actions.deleteTodo(index))
                                }
                            >
                                Xóa
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <hr />
        </div>
    );
}

export default App;
