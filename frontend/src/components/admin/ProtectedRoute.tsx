import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

type ProtectedRouteProps = {
    children: React.ReactNode;
};

type JwtPayload = {
    exp: number;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const token = localStorage.getItem("adminToken");

    if (!token) {
        return <Navigate to="/admin/login" replace />;
    }

    try {
        const decodedToken = jwtDecode<JwtPayload>(token);
        const currentTime = Date.now();

        const tokenIsExpired = decodedToken.exp * 1000 < currentTime;

        if (tokenIsExpired) {
            localStorage.removeItem("adminToken");

            return <Navigate to="/admin/login" replace />;
        }

        return children;
    } catch {
        localStorage.removeItem("adminToken");
        return <Navigate to="/admin/login" replace />;
    }
};
