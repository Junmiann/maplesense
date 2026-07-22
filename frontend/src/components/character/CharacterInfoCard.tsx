import type { Class } from "../../types";

type Props = {
  character: Class;
};

export default function CharacterInfoCard({character}: Props) {
    return (
        <>
            {/* Character information */}
            <div className="flex flex-col justify-center pt-12 m-auto overflow-hidden md:w-3/5 lg:w-2/5">
                <h1 className="text-[40px] mb-2 uppercase">{character.name}</h1>
                <p className="mb-6 text-lg uppercase border-b-2 border-[#718088]/20">{character.job.join(", ")} | {character.origin}</p>

                {/* Weapons info */}
                <div className="flex flex-col gap-4 mb-2 w-lg">
                    <div>
                        <p className="font-semibold uppercase">Primary weapon</p>
                        <div className="p-2 border-2 rounded-sm border-[#71808850] bg-[#718088]/20">
                            <p className="ml-4 text-xs sm:text-sm">{character.primary_weapon.join(", ")}</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold uppercase">Secondary weapon</p>
                        <div className="p-2 border-2 border-[#71808850] rounded-sm bg-[#718088]/20">
                            <p className="ml-4 text-xs sm:text-sm">{character.secondary_weapon.join(", ")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}