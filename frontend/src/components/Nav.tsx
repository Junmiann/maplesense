import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-end h-12 uppercase">
            <Link to="/" className="p-3 m-4 font-semibold">Home</Link>
            <Link to="/Classes" className="p-3 m-4 font-semibold">Classes</Link>
        </nav>
    )
}