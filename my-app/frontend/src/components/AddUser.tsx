export async function addUser() {
    {/* test user */}
    const newUser = {
        firstName: "Lisa",
        lastName: "Russo",
    };

    try {
        const response = await fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
            }
        );

        if (!response.ok) {
        throw new Error("Failed to add user");
        }

        const data = await response.json();
        console.log("User created:", data);

    } catch (error) {
        console.error(error);
    }
}
