import { describe, expect, it } from "vitest";
import { buildClassQuery } from "../src/queryBuilder.js";

describe ("buildQueryClass", () => {
    it("returns all maplestory classes if no params are provided", () => {
        const result = buildClassQuery({});

        expect(result).toEqual({
            query: "SELECT * FROM classes",
            values: [],
        });
    });
});