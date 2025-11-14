import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
    const token = localStorage.getItem("token");
    if (!token) {
        return <Navigate to="/" replace />;
    }

    const payload = JSON.parse(atob(token.split(".")[1]));
    const exp = payload.exp * 1000;

    localStorage.setItem("token_exp", exp.toString());

    const timeUntilExpire = exp - Date.now();
    if (timeUntilExpire <= 0) {
        localStorage.removeItem("token");
        localStorage.removeItem("token_exp");
        return <Navigate to="/" replace />;
    }

    setTimeout(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("token_exp");
        alert("Your session has expired, please re-login.");
        window.location.href = "/";
    }, timeUntilExpire);

    return children;
}
