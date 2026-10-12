import { Outlet } from "react-router-dom";
import AdminNavbar from "./navbars/AdminNavbar";

function AdminLayout() {
    return (
        <div className="flex flex-col md:flex-row h-dvh overflow-hidden">
            <AdminNavbar />
            <main className="flex-1 min-h-0 min-w-0 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
}

export default AdminLayout;
