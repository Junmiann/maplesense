export async function ChangePassword(newPassword: string) {
    await fetch("http://localhost:5000/admin/change-password", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("adminToken")}`
        },
        body: JSON.stringify({
            newPassword
        }),
    });
};
