import { useEffect, useState } from "react";

function Content() {
    const [title, setTitle] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log("Mounted");
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);
            });
    }, []);

    return (
        <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <br />
            <p>List post</p>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Content;
