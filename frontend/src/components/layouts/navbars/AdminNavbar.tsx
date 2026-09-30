import { handleLogout } from "../../admin/auth/handleLogout";

export default function AdminNavbar() {
    return (
        <nav>
            <button type="submit" onClick={handleLogout}>
                Logout
            </button>
        </nav>
    );
};
