import type { Request, Response } from "express";
import * as classService from "./classService.js";

// GET /classes
export const fetchClasses = async (req: Request, res: Response) => {
    try {
        const job = req.query.job as string;
        const origin = req.query.origin as string;

        if (job && origin) {
            return res.status(400).json({
                error: "Cannot use both job and origin."
            });
        }

        const classes = await classService.queryClasses({job, origin});
        res.status(200).json(classes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Database error" });
    }
};

// GET /classes/character/:id
export const fetchCharacter = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: "Missing character ID" });
        }

        const charId = parseInt(id);
        if (isNaN(charId)) {
            return res.status(400).json({ error: "Invalid character ID" });
        }

        const character = await classService.selectedCharacter(charId);
        res.status(200).json(character);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Database error" });
    }
};
