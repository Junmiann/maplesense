import { Outlet } from "react-router-dom";
import AdminNavbar from "./navbars/AdminNavbar";

function AdminLayout() {
    return (
        <div className="flex flex-col md:flex-row">
            <AdminNavbar />
            <Outlet />
        </div>
    );
}

export default AdminLayout;
