import { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import type { Class } from "../../types";
import type { Job, Origin } from "../../constants";
import ClassesFilters from "./filters/ClassesFilters";

type FilterMode = "job" | "origin";

function newUrl(searchParams: URLSearchParams) {
    const baseUrl = "http://localhost:5000/classes";
    const query = searchParams.toString();
    return query ? `${baseUrl}?${query}` : baseUrl;
}

export default function Classes() {
    const location = useLocation();
    
    const [classes, setClasses] = useState<Class[]>([]);
    const [searchParams, setSearchParams] = useSearchParams();
    
    const job = (searchParams.get("job") as Job) || "all";
    const origin = (searchParams.get("origin") as Origin) || "explorer";
    const [activeFilter, setActiveFilter] = useState<FilterMode>("job");

    const sort = searchParams.get("sort");
    const order = searchParams.get("order");

    const sortOrder: "asc" | "desc" | "none" = 
        sort === "difficulty" && (order === "asc" || order === "desc") 
        ? order 
        : "none";
    
    const handleFilterSwitch = (filter: FilterMode) => {
        setActiveFilter(filter);
        if (filter === "job") {
            updateSearchParams({
                origin: null,
                job: null
            });
        } else {
            updateSearchParams({
                job: null,
                origin: "explorer"
            });
        }
    };

    const setJob = (nextJob: Job) => {
        updateSearchParams({
            origin: null,
            job: nextJob === "all" ? null : nextJob
        });
    };

    const setOrigin = (nextOrigin: Origin) => {
        updateSearchParams({ 
            job: null,
            origin: nextOrigin
        });
    };

    const updateSearchParams = (patch: Record<string, string | null>) => {
        setSearchParams((prev) => {
        const next = new URLSearchParams(prev);

        for (const [key, value] of Object.entries(patch)) {
            if (value === null) next.delete(key);
            else next.set(key, value);
        }

        return next;
        });
    };

    useEffect(() => {
        const fetchClasses = async () => {
        const url = newUrl(searchParams);
        const response = await fetch(url);
        const data = await response.json();
        setClasses(data);
    };

  fetchClasses();
}, [searchParams]);
    return (
        <div className="w-[90%] flex flex-col max-w-xl mx-auto mt-20 mb-6 lg:max-w-6xl md:max-w-3xl">
            <h1 className="text-center uppercase md:text-start">Classes</h1>

            <ClassesFilters
                activeFilter={activeFilter}
                onSwitch={handleFilterSwitch}
                job={job}
                setJob={setJob}
                origin={origin}
                setOrigin={setOrigin}
            />

            {/* Sort-element */}
            <div className="flex justify-end mb-4">
                <select
                    value={sortOrder}
                    onChange={(e) => {
                        const next = e.target.value as "asc" | "desc" | "none";

                        if (next === "none") {
                        updateSearchParams({ sort: null, order: null });
                        } else {
                        updateSearchParams({ sort: "difficulty", order: next });
                        }
                    }}
                    className="px-3 py-1 text-sm border rounded-md bg-white/10 border-white/20"
                    >
                        <option value="none" className="text-[#2b2b2b]">Sort by Difficulty</option>
                        <option value="asc" className="text-[#2b2b2b]">Low to High</option>
                        <option value="desc" className="text-[#2b2b2b]">High to Low</option>
                    </select>
            </div>
            
            {/* Classes list */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
                {classes.map((cls) => (
                    <Link
                        key={cls.id}
                        to={`/classes/${cls.id}`}
                        state={{ from: `${location.pathname}${location.search}` }}
                        className="flex flex-col items-center gap-2 transition border rounded-lg lg:p-4 group border-white/5 bg-white/5">
                            <img src={cls.image_url} alt={cls.name} 
                                className="drop-shadow-[0_6px_10px_#00000066] transition group-hover:drop-shadow-[0_5px_10px_#B1E1E9]"/>
                            <p className="text-sm border-t md:text-base lg:text-lg border-white/20">{cls.name}</p> 
                    </Link>
                ))}
            </div>
        </div>
    );
}
