
export async function GetPasswordChangeStatus() {
    const response = await fetch("http://localhost:5000/admin/password-change-status", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("adminToken")}`
        },
    });

    const data = await response.json();

    return data.mustChangePassword;
}