import { useState } from "react";
import { handleLogout } from "../../admin/auth/handleLogout";

export default function AdminNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <button onClick={() => setMenuOpen(!menuOpen)} 
                    className="md:hidden p-4 w-16 text-lg">
                ☰
            </button>

            <nav className={`${menuOpen ? "flex" : "hidden"}
                    flex-col
                    bg-[#dee1e3] bg-opacity-80
                    md:flex md:p-4 md:w-64 md:h-screen md:gap-4`
                }
            >
                <p onClick={() => setMenuOpen(false)}
                    className="py-2 px-4 bg-[#fff] rounded-md 
                        transition duration-300 delay-100 
                        hover:bg-[#ffc250] hover:text-[#fff]">
                        Dashboard
                </p>
                <p onClick={() => setMenuOpen(false)}
                    className="py-2 px-4 bg-[#fff] rounded-md 
                        transition duration-300 delay-100 
                        hover:bg-[#ffc250] hover:text-[#fff]">
                        Characters
                </p>
                <button type="submit" onClick={handleLogout} 
                        className="mt-auto py-2 px-4 bg-[#ffae6e] text-[#fff]
                            transition duration-300 delay-100 rounded-md 
                            hover:bg-[#ffc250]"
                >
                    Logout
                </button>
            </nav>
        </>
    );
};
