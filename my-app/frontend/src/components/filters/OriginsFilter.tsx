import { ORIGINS, type Origin } from "../../constants/origins";

type OriginFilterProps = {
    activeOrigin: Origin;
    onChange: (origin: Origin) => void;
};

export default function OriginFilter({
    activeOrigin,
    onChange,
}: OriginFilterProps) {
    return (
        <div>
            {ORIGINS.map((origin) => (
                <button 
                    key={origin}
                    onClick={() => onChange(origin)}
                    style={{
                        marginRight: "0.5rem",
                        fontWeight: activeOrigin === origin ? "bold" : "normal",
                    }}>
                        {origin.toLocaleUpperCase()}
                    </button>
            ))}
        </div>
    );
}