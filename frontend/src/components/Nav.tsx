import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-center h-12 mb-8 uppercase bg-white/10">
            <Link to="/" className="p-3 m-4 font-semibold">Home</Link>
            <Link to="/Classes" className="p-3 m-4 font-semibold">Classes</Link>
        </nav>
    )
}