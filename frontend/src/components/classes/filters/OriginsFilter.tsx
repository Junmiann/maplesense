import { ORIGINS, type Origin } from "../../../constants";

type OriginFilterProps = {
    activeOrigin: Origin;
    onChange: (origin: Origin) => void;
};

export default function OriginFilter({
    activeOrigin,
    onChange,
}: OriginFilterProps) {
    return (
        <div className="border-b border-[#718088]/20">
            {ORIGINS.map((origin) => (
                <button 
                    key={origin}
                    onClick={() => onChange(origin)}
                    className={`pb-2 mr-6 transition
                        ${activeOrigin === origin
                            ? "font-semibold"
                            : "text-[#adb6bb] hover:text-[#ffae6e] hover:font-bold"
                        }`}>
                            {origin.toLocaleUpperCase()}
                    </button>
            ))}
        </div>
    );
}