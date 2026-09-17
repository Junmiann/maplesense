import { useEffect, useState } from "react";

import { GetPasswordChangeStatus } from "./handlePasswordChange.tsx";

export function MustChangePassword() {
    const [mustChangePassword, setMustChangePassword] = useState(false);

    useEffect(() => {
        async function checkPasswordStatus() {
            const passwordStatus = await GetPasswordChangeStatus();
            setMustChangePassword(passwordStatus);
        }

        checkPasswordStatus();
    }, []);

    if (!mustChangePassword) {
        return null;
    };

    return (
        <>
            <p>
                <a href="/admin/change-password">Please change your password!</a>
            </p>
        </>
    );
};
