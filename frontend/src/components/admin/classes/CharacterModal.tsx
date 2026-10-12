import type { Class } from "../../../types";

type CharacterModalProps = {
    character: Class;
    onClose: () => void;
};

export default function CharacterModal({ character, onClose } : CharacterModalProps) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#000]/50"
            onClick={onClose}
        >
            <div
                className="bg-[#f9fafb] text-black rounded-lg p-4 text-start text-sm h-full max-h-[32rem] overflow-y-auto"
                onClick={(event) => event.stopPropagation()}
            >   
                <button
                    type="button"
                    onClick={onClose}
                    className="block ml-auto text-[#bbb] text-lg font-bold hover:text-[#888] transition-colors"
                >
                    X
                </button>
                
                <form className="flex flex-col gap-2">
                    <label htmlFor="character-name" className="font-bold">
                        Name
                    </label>
                    <input
                        id="character-name"
                        type="text"
                        className="mb-2 p-1 rounded-sm bg-[#f0f0f0]"
                        value={character.name}
                    />
                    
                    <div className="md:flex gap-2 overflow-hidden">
                        <label htmlFor="character-job" className="font-bold">
                            Job
                        </label>
                        <input
                            id="character-job"
                            type="text"
                            className="mb-2 p-1 rounded-sm bg-[#f0f0f0] w-full md:w-[50%]"
                            value={character.job}
                        />

                        <label htmlFor="character-origin" className="font-bold">
                            Origin
                        </label>
                        <input
                            id="character-origin"
                            type="text"
                            className="mb-2 p-1 rounded-sm bg-[#f0f0f0] w-full md:w-[50%]"
                            value={character.origin}
                        />
                    </div>

                    <label htmlFor="image-url" className="font-bold">
                        Image URL
                    </label>
                    <input
                        id="image-url"
                        type="text"
                        className="mb-2 p-1 rounded-sm bg-[#f0f0f0]"
                        value={character.image_url}
                    />

                    <p className="font-bold text-xl border-t-2 border-[#ccc] mt-2 pt-2">Weapons</p>
                    <label htmlFor="character-primary-weapon" className="font-bold">
                        Primary Weapon
                    </label>
                    <input
                        id="character-primary-weapon"
                        type="text"
                        className="mb-2 p-1 rounded-sm bg-[#f0f0f0]"
                        value={character.primary_weapon}
                    />

                    <label htmlFor="character-secondary-weapon" className="font-bold">
                        Secondary Weapon
                    </label>
                    <input
                        id="character-secondary-weapon"
                        type="text"
                        className="mb-2 p-1 rounded-sm bg-[#f0f0f0]"
                        value={character.secondary_weapon}
                    />

                    <p className="font-bold text-xl border-t-2 border-[#ccc] mt-2 pt-2">Traits</p>
                    <label htmlFor="difficulty" className="font-bold">
                        Difficulty
                    </label>
                    <select id="difficulty" className="mb-2 p-1 rounded-sm bg-[#f0f0f0]" value={character.difficulty}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <label htmlFor="mobility" className="font-bold">
                        Mobility
                    </label>
                    <select id="mobility" className="mb-2 p-1 rounded-sm bg-[#f0f0f0]" value={character.mobility}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <label htmlFor="range" className="font-bold">
                        Range
                    </label>
                    <select id="range" className="mb-2 p-1 rounded-sm bg-[#f0f0f0]" value={character.range}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <button
                        type="button"
                        className="mt-4 bg-[#408c3b] text-white py-2 px-4 rounded hover:bg-[#357a30] transition-colors"
                    >
                        Edit
                    </button>
                </form>
            </div>
        </div>
    );
}