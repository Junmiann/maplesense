import { useState } from "react";

export default function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(event: React.FormEvent) {
        event.preventDefault();

        const response = await fetch("http://localhost:5000/admin/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password
            }),
        });

        const data = await response.json();

        console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input 
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="Username"
                />

                <input 
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Password"
                />

                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};
