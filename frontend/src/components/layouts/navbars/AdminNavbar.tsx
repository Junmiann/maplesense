import { handleLogout } from "../../admin/auth/handleLogout";

export default function AdminNavbar() {
    return (
        <nav className="bg-[#dee1e3] bg-opacity-80 p-4 w-64 h-screen flex flex-col gap-4">
            <p className="py-2 px-4 transition duration-300 delay-100 bg-[#fff] rounded-md hover:bg-[#ffc250] hover:text-[#fff]">Dashboard</p>
            <p className="py-2 px-4 transition duration-300 delay-100 bg-[#fff] rounded-md hover:bg-[#ffc250] hover:text-[#fff]">Characters</p>
            <button type="submit" onClick={handleLogout} 
                    className="mt-auto py-2 px-4 transition duration-300 delay-100 bg-[#ffae6e] rounded-md hover:bg-[#ffc250] text-[#fff]">
                Logout
            </button>
        </nav>
    );
};
