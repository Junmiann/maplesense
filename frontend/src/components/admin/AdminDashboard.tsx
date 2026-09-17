import { handleLogout } from "./auth/handleLogout";
import { MustChangePassword } from "./auth/MustChangePassword";

export default function AdminDashboard() {
    return (
        <div>
            <button type="submit" onClick={handleLogout}>
                Logout
            </button>

            <MustChangePassword />

            <h1>Admin Dashboard</h1>
        </div>
    );
};
