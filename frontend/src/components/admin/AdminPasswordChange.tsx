import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ChangePassword } from "./auth/handlePasswordChange";

export default function AdminPasswordChange() {
    const [newPassword, setNewPassword] = useState("");
    const [verifyNewPassword, setVerifyNewPassword] = useState("");

    const navigate = useNavigate();

    async function handlePasswordChange(event: React.FormEvent) {
        event.preventDefault();

        
        const isMatching = newPassword === verifyNewPassword;

        if (!isMatching) {
            alert("The password do not match. Please make sure both fields contain the same password.");
            return;
        }
        
        try {
            const data = await ChangePassword(newPassword);

            if (!data.success) {
                alert("We couldn't change your password. Please try again.");
                return;
            }

            navigate("/admin/dashboard");

        } catch (error) {
            throw new Error ("Something went wrong while changing your password.");
        }
    };

    return (
        <>
            <div>
                <p className="p-4">
                    <a href="/admin/dashboard">&#8592; Go back to dashboard</a>
                </p>
            </div>
            <div className="flex items-center justify-center">
                <form 
                    onSubmit={handlePasswordChange} 
                    className="flex flex-col gap-4 p-8 bg-[#C0C9CF80] rounded-md"
                >
                    <h1>Change password</h1>
                    <input 
                        type="password"
                        value={newPassword}
                        onChange={(event) => setNewPassword(event.target.value)}
                        placeholder="New password"
                        className="p-4 rounded-md text-[#000]"
                    />

                    <input 
                        type="password"
                        value={verifyNewPassword}
                        onChange={(event) => setVerifyNewPassword(event.target.value)}
                        placeholder="Verify password"
                        className="p-4 rounded-md text-[#000]"
                    />

                    <button 
                        type="submit"
                        className="p-4 transition duration-300 delay-100 bg-[#ffae6e] rounded-md hover:bg-[#ffc250] text-[#fff]"
                    >
                        Change password
                    </button>
                </form>
            </div>
        </>
    );
};
