import { Link, useLocation } from "react-router-dom";
import type { Class } from "../../types";

type ClassesListProps = {
    classes: Class[];
    mode?: "public" | "admin";
    onSelect?: (cls: Class) => void;
};

export default function ClassesList({
    classes,
    mode = "public",
    onSelect,
}: ClassesListProps) {
    const location = useLocation();

    return (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {classes.map((cls) => {
                const content = (
                    <>
                        <img
                            src={cls.image_url}
                            alt={cls.name}
                            className="drop-shadow-[0_6px_10px_#00000066] transition group-hover:drop-shadow-[0_5px_10px_#ffae6e]"
                        />

                        <p className="text-sm border-t md:text-base lg:text-lg border-[#718088]/20">
                            {cls.name}
                        </p>
                    </>
                );

                const className = "flex flex-col items-center gap-2 transition border rounded-lg lg:p-4 group border-[#718088]/5 bg-[#718088]/10";

                if (mode === "admin") {
                    return (
                        <button
                            key={cls.id}
                            type="button"
                            onClick={() => onSelect?.(cls)}
                            className={className}
                        >
                            {content}
                        </button>
                    );
                }

                return (
                    <Link
                        key={cls.id}
                        to={`/classes/${cls.id}`}
                        state={{ from: `${location.pathname}${location.search}` }}
                        className={className}
                    >
                        {content}
                    </Link>
                );
            })}
        </div>
    );
}
