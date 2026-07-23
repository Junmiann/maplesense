import type { Class } from "../../types";
import StatBar from "./StatBar";

type Props = {
  character: Class;
};

export default function CharacterTraits({character}: Props) {
    return (
        <>
            {/* Traits */}
            <div className="flex flex-col gap-3 lg:pt-12 md:w-1/5 lg:w-2/5 lg:mt-10 md:my-auto">
                <h2 className="uppercase text-xl lg:text-3xl">Traits</h2>
                <div className="lg:flex lg:border-2 lg:border-[#71808850] lg:rounded-sm">
                    <div className="flex gap-1 lg:w-2/5 lg:bg-[#718088]/20 items-center p-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 lg:size-6 lg:shrink-0">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                        </svg>
                        <p className="font-semibold uppercase text-sm">Difficulty</p>
                    </div>
                    <StatBar value={character.difficulty} />
                </div>
                <div className="lg:flex lg:border-2 lg:border-[#71808850] lg:rounded-sm">
                    <div className="flex gap-1 lg:w-2/5 lg:bg-[#718088]/20 items-center lg:p-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 lg:size-6 lg:shrink-0">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                        <p className="font-semibold uppercase text-sm">Mobility</p>
                    </div>
                    <StatBar value={character.mobility} />
                </div>
                <div className="lg:flex lg:border-2 lg:border-[#71808850] lg:rounded-sm">
                    <div className="flex gap-1 lg:w-2/5 lg:bg-[#718088]/20 items-center lg:p-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 lg:size-6 lg:shrink-0">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                        <p className="font-semibold uppercase text-sm">Range</p>
                    </div>
                    <StatBar value={character.range} />
                </div>
            </div>
        </>
    );
}