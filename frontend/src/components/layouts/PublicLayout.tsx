import { Outlet } from "react-router-dom";
import Navbar from "../Nav";

function PublicLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default PublicLayout;
