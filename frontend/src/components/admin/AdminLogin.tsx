import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

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

        if (data.success) {
            localStorage.setItem("adminToken", data.token);
            setUsername('')
            setPassword('')
            navigate("/admin/dashboard");
        } else {
            alert("Invalid username or password");
        };
    };

    return (
        <div className="flex m-auto max-w-[100vh] h-[calc(88vh-3rem)] items-center justify-between">
            <img src="../../src/assets/maplestory-mushroom.webp" 
                alt="maplestory mushroom"
                draggable="false"
                className="w-[36vh]"
            />
            <form 
                onSubmit={handleLogin} 
                className="flex flex-col gap-4 p-8 my-auto w-[56vh] bg-[#C0C9CF80] rounded-md"
            >
                <h1>Login</h1>
                <input 
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="Username"
                    className="p-4 rounded-md text-[#000]"
                />

                <input 
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Password"
                    className="p-4 rounded-md text-[#000]"
                />

                <button 
                    type="submit"
                    className="p-4 transition duration-300 delay-100 bg-[#ffae6e] rounded-md hover:bg-[#ffc250] text-[#fff]"
                >
                    Login
                </button>
            </form>
        </div>
    );
};
