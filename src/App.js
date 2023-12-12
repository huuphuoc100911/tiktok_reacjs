import { useState } from "react";

// Response from API
const courses = [
    {
        id: 1,
        name: "HTML CSS",
    },
    {
        id: 2,
        name: "Javascript",
    },
    {
        id: 3,
        name: "ReactJS",
    },
];

function App() {
    // input text, email
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    //input radio, checkbox
    const [radioChecked, setRadioChecked] = useState(2);
    const [checkboxChecked, setCheckboxChecked] = useState([]);

    const handleCheckbox = (id) => {
        setCheckboxChecked((pre) => {
            const isCheck = checkboxChecked.includes(id);

            if (isCheck) {
                // Uncheck
                return checkboxChecked.filter((item) => item !== id);
            } else {
                // Check
                return [...pre, id];
            }
        });
    };

    const handleSubmit = () => {
        // Call API
        console.log({ name, email, radioChecked, checkboxChecked });
    };

    return (
        <div style={{ padding: 32 }}>
            <p>Name</p>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <p>Email</p>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            {/* Radio */}
            <p>Radio</p>
            {courses.map((course) => (
                <div key={course.id}>
                    <input
                        type="radio"
                        checked={radioChecked === course.id}
                        onChange={() => setRadioChecked(course.id)}
                    />
                    {course.name}
                </div>
            ))}
            {/* Checkbox */}
            <p>Checkbox</p>
            {courses.map((course) => (
                <div key={course.id}>
                    <input
                        type="checkbox"
                        checked={checkboxChecked.includes(course.id)}
                        onChange={() => handleCheckbox(course.id)}
                    />
                    {course.name}
                </div>
            ))}
            <button onClick={handleSubmit}>Register</button>
        </div>
    );
}

export default App;
