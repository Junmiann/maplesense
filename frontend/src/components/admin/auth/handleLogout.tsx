export function handleLogout() {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
};
