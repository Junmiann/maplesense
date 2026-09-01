import { describe, expect, it } from "vitest";
import { authenticateAdmin } from "../src/admin/admin.service";

describe("admin", () => {
    it("should authenticate admin user", async () => {
        const result = await authenticateAdmin("admin", "adminpassword");

        expect(result).toBe(true);
    });

    it("should reject invalid password", async () => {
        const result = await authenticateAdmin("admin", "wrongpassword");

        expect(result).toBe(false);
    });
});