import { describe, expect, it } from "vitest";
import { authenticateAdmin } from "../src/admin/adminService.js";
import { createTestAdmin } from "./helpers/createTestAdmin.js";

describe("admin", () => {
    it("should authenticate an admin with the correct password", async () => {
        const admin = await createTestAdmin();

        const result = await authenticateAdmin(
            admin.username,
            admin.password
        );

        expect(result).toBe(true);
    });

    it("should reject invalid password", async () => {
        const admin = await createTestAdmin();

        const result = await authenticateAdmin(
            admin.username,
            "password"
        );

        expect(result).toBe(false);
    });
});