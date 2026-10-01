import { MustChangePassword } from "./auth/MustChangePassword";

export default function AdminDashboard() {
    return (
        <div className="mx-auto pt-4">
            <MustChangePassword />

            <h1>Admin Dashboard</h1>
        </div>
    );
};
