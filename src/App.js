import { useState } from "react";

function App() {
    const [job, setJob] = useState("");
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem("jobs"));

        return storageJobs ?? [];
    });

    const handleSubmit = () => {
        setJobs((pre) => {
            const newJobs = [...pre, job];

            // Save to localStorage
            const jsonJob = JSON.stringify(newJobs);
            localStorage.setItem("jobs", jsonJob);

            return newJobs;
        });

        setJob("");
    };

    return (
        <div style={{ padding: 32 }}>
            <input value={job} onChange={(e) => setJob(e.target.value)} />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
