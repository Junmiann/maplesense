import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import type { Class } from "../types";

export default function Character() {
    const { id } = useParams();
    const [character, setCharacter] = useState<Class | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const fetchCharacter = async () => {
            try {
                setLoading(true);

                const response = await fetch(
                    `http://localhost:5000/classes/character/${id}`
                );

                const data = await response.json();

                if (!response.ok || data.error) {
                    console.error(data.error);
                    return;
                }

                setCharacter(data[0]);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacter();
    }, [id]);

    if (loading) return <p>Loading character...</p>;
    if (!character) {
        return <Navigate to="/classes" replace />;
    }

    return (
        <div className="flex flex-col max-w-4xl p-4 m-10 mx-auto rounded bg-white/10">
            <Link to="/classes" className="flex justify-start w-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </Link>
            <div className="flex items-center justify-between">
                {/* Character information */}
                <div className="w-2/3 p-4">
                    <h1 className="mb-2 font-bold uppercase">{character.name}</h1>
                    <p className="justify-center mb-4 text-xl uppercase">{character.job.join(", ")} | {character.origin}</p>
                    <div className="flex flex-col max-w-lg gap-4 mb-2 w-lg text-start">
                        <p className="p-2 pl-5 rounded-full bg-white/20"><span className="font-bold uppercase">Primary weapon:</span>{" "}{character.primary_weapon.join(", ")}</p>
                        <p className="p-2 pl-5 rounded-full bg-white/20"><span className="font-bold uppercase">Secondary weapon:</span>{" "}{character.secondary_weapon.join(", ")}</p>
                    </div>
                    <div>
                        <p>Difficulty: {character.difficulty}</p>
                        <p>Mobility: {character.mobility}</p>
                        <p>Range: {character.range}</p>
                    </div>
                </div>
                <img src={character.image_url} alt={character.name} />
            </div>
        </div>
    );
}
