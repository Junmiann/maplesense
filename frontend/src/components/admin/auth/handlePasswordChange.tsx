export async function ChangePassword(newPassword: string) {
    const response = await fetch("http://localhost:5000/admin/change-password", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("adminToken")}`
        },
        body: JSON.stringify({
            newPassword
        }),
    });

    const data = await response.json();

    console.log(data);

    return data;
};

export async function GetPasswordChangeStatus() {
    const response = await fetch("http://localhost:5000/admin/password-change-status", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("adminToken")}`
        },
    });

    const data = await response.json();

    console.log("Password status response:", data);

    return data.mustChangePassword;
}