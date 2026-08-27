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

    it("returns the correct query and value when a job is provided", () => {
        const result = buildClassQuery({ job: "Warrior" });

        expect(result).toEqual({
            query: `SELECT * FROM classes WHERE EXISTS (
            SELECT 1
            FROM unnest(classes.job) AS x
            WHERE LOWER(x) = LOWER($1))`,
            values: ["Warrior"],
        });
    });
});