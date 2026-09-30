import { Outlet } from "react-router-dom";
import AdminNavbar from "./navbars/AdminNavbar";

function AdminLayout() {
    return (
        <>
            <AdminNavbar />
            <Outlet />
        </>
    );
}

export default AdminLayout;
