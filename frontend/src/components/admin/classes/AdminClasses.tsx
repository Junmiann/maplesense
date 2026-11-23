import { useState, useEffect } from "react";
import type { Class } from "../../../types";
import NewCharacter from "./NewCharacter";
import ClassesList from "../../classes/ClassesList";
import CharacterModal from "./CharacterModal";

export default function AdminCharacters() {
    const [classes, setClasses] = useState<Class[]>([]);

    const [selectedCharacter, setSelectedCharacter] =
        useState<Class | null>(null);

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
        <div className="w-[90%] max-w-6xl mx-auto mt-8">
            <h1 className="text-center uppercase md:text-start text-2xl md:text-5xl">
                Manage Classes
            </h1>

            <NewCharacter />

            <ClassesList
                classes={classes}
                mode="admin"
                onSelect={setSelectedCharacter}
            />

            {selectedCharacter && (
                <CharacterModal
                    character={selectedCharacter}
                    onClose={() => setSelectedCharacter(null)}
                />
            )}
        </div>
    );
}
