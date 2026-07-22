import { useEffect, useState } from "react";
import { useParams, Link, Navigate, useLocation } from "react-router-dom";
import type { Class } from "../../types";
import CharacterInfoCard from "./CharacterInfoCard";
import CharacterTraits from "./CharacterTraits";

export default function Character() {
    const { id } = useParams();
    const [character, setCharacter] = useState<Class | null>(null);
    const [loading, setLoading] = useState(true);

    const location = useLocation();

    const from = (location.state as any)?.from as string | undefined;

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

                setCharacter(data?.[0] ?? null);
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
        <div className="flex flex-col justify-center max-w-xl mx-auto md:max-w-4xl lg:max-w-6xl">
            <Link to={from ?? "/classes"} className="flex w-12 pl-4 md:p-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </Link>
            
            <div className="items-start p-4 mt-4 md:p-0 md:pt-10 md:flex text-start">
                <CharacterInfoCard character={character} />
                <img 
                    src={character.image_url} alt={character.name} 
                    className="mx-auto mt-10 md:my-auto md:w-3/5"
                />
                <CharacterTraits character={character} />
            </div>
        </div>
    );
}
