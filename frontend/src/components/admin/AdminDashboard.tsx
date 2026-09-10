import { handleLogout } from "./auth/handleLogout";

export default function AdminDashboard() {
    return (
        <div>
            <button type="submit" onClick={handleLogout}>
                Logout
            </button>

            <h1>Admin Dashboard</h1>
        </div>
    );
};
