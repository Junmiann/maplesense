import { Outlet } from "react-router-dom";
import Navbar from "./navbars/PublicNavbar";

function PublicLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default PublicLayout;
