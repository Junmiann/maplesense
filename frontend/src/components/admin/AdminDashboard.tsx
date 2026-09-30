import { MustChangePassword } from "./auth/MustChangePassword";

export default function AdminDashboard() {
    return (
        <div>
            <MustChangePassword />

            <h1>Admin Dashboard</h1>
        </div>
    );
};
