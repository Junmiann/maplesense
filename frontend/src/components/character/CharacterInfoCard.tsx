import type { Class } from "../../types";
import StatBar from "./StatBar";

type Props = {
  character: Class;
};

export default function CharacterInfoCard({character}: Props) {
    return (
        <>
            {/* Character information */}
            <div className="flex flex-col justify-center md:w-3/5 lg:w-2/5 p-8 overflow-hidden rounded-xl bg-gradient-to-t from-[#315965] to-[#8EB3BE]/60 border-2 border-white/40">
                <h1 className="text-[40px] mb-2 uppercase drop-shadow-[2px_4px_2px_#315965] bg-gradient-to-t from-[#8EB3BE] to-[#F5F7FA] bg-clip-text text-transparent">{character.name}</h1>
                <p className="mb-6 text-lg uppercase border-b-2 border-white/20 opacity-80">{character.job.join(", ")} | {character.origin}</p>

                {/* Weapons info */}
                <div className="flex flex-col gap-4 mb-2 w-lg">
                    <div>
                        <p className="ml-6 font-semibold uppercase">Primary weapon</p>
                        <p className="p-2 text-sm border-2 rounded-full border-white/30 bg-[#8EB3BE]/10">{character.primary_weapon.join(", ")}</p>
                    </div>
                    <div>
                        <p className="ml-6 font-semibold uppercase">Secondary weapon</p>
                        <p className="p-2 text-sm border-2 rounded-full border-white/30 bg-[#8EB3BE]/10">{character.secondary_weapon.join(", ")}</p>
                    </div>
                </div>

                {/* Traits */}
                <div className="flex flex-col gap-3 mt-6">
                    <div className="flex gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                        </svg>
                        <p className="font-semibold uppercase">Difficulty</p>
                        <div className="ml-auto">
                            <StatBar value={character.difficulty} />
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                        <p className="font-semibold uppercase">Mobility</p>
                        <div className="ml-auto">
                            <StatBar value={character.mobility} />
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                        <p className="font-semibold uppercase">Range</p>
                        <div className="ml-auto">
                            <StatBar value={character.range} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}