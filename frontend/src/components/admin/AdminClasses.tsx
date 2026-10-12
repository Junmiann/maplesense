import { useState, useEffect } from "react";
import type { Class } from "../../types";
import ClassesList from "../classes/ClassesList";

export default function AdminCharacters() {
    const [classes, setClasses] = useState<Class[]>([]);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/classes"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch classes");
                }

                const data: Class[] = await response.json();
                setClasses(data);
            } catch (error) {
                console.error("Error fetching characters:", error);
            }
        };

        fetchClasses();
    }, []);

    return (
        <div className="w-[90%] max-w-6xl mx-auto">
            <h1 className="text-center uppercase md:text-start text-2xl md:text-5xl py-4">
                Manage Classes
            </h1>

            <ClassesList
                classes={classes}
                mode="admin"
            />
        </div>
    );
}
