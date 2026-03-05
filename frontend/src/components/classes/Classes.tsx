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

    const [showSort, setShowSort] = useState<boolean>(false);

    // Keep activeFilter in sync with URL (else the filter always shows job-filter when navigating back from character page)
    useEffect(() => {
        if (searchParams.has("origin")) setActiveFilter("origin");
        else setActiveFilter("job");
    }, [searchParams]);

    const sort = searchParams.get("sort");
    const order = searchParams.get("order");
    
    // Applies either job/origin-filter and updates the URL
    const applyFilter = (filter: FilterMode, value?: Job | Origin) => {
        const patch: Record<string, string | null> = {};

        if (filter === "job") {
            patch.job = value && value !== "all" 
            ? (value as Job) 
            : null;
            patch.origin = null;
        } else {
            patch.origin = value 
            ? (value as Origin) 
            : "explorer";
            patch.job = null;
        }

        setActiveFilter(filter);
        updateSearchParams(patch);
    };

    // Updates the URL search parameters
    // string: set/update parameter | null: remove parameter
    const updateSearchParams = (patch: Record<string, string | null>) => {
        // Get and clone current search params (to avoid mutating)
        setSearchParams((current) => {
        const next = new URLSearchParams(current);

        // Loop through new updates
        for (const [key, value] of Object.entries(patch)) {
            if (value === null) {
                next.delete(key);
            } else {
                next.set(key, value);
            }
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
        <div className="w-[90%] flex flex-col max-w-xl mx-auto md:mt-20 mb-6 lg:max-w-6xl md:max-w-3xl">
            <h1 className="text-center uppercase md:text-start">Classes</h1>

            <ClassesFilters
                activeFilter={activeFilter}
                onSwitch={(filter) => applyFilter(filter)}
                job={job}
                setJob={(job) => applyFilter("job", job)}
                origin={origin}
                setOrigin={(origin) => applyFilter("origin", origin)}
            />

            {/* Sort-element */}
            <div className="flex justify-end mb-4">
                <button
                    className="px-2 py-2"
                    onClick={() => setShowSort(!showSort)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 hover:text-[#b1e1e9]">
                        <path d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                    </svg>
                </button>
                
                {showSort && (
                    <div className="absolute mt-10 w-40 border rounded-md bg-[#1e1e1e] border-white/20 z-50 text-sm" role="menu">
                        <button
                            className="block w-full px-3 py-2 text-left hover:bg-white/10"
                            onClick={() => {
                                updateSearchParams({ sort: null, order: null });
                                setShowSort(false);
                            }}> Standard order
                        </button>

                        <button
                            className={`block w-full px-3 py-2 text-left ${
                                sort === "difficulty" && order === "asc" 
                                ? "bg-[#4f7e86] text-white" 
                                : "hover:bg-white/10"}`}
                            onClick={() => {
                                updateSearchParams({ sort: "difficulty", order: "asc" });
                                setShowSort(false);
                            }}> Difficulty: Low to High
                        </button>

                        <button
                            className={`block w-full px-3 py-2 text-left ${
                                sort === "difficulty" && order === "desc" 
                                ? "bg-[#4f7e86] text-white" 
                                : "hover:bg-white/10"}`}
                            onClick={() => {
                                updateSearchParams({ sort: "difficulty", order: "desc" });
                                setShowSort(false);
                            }}> Difficulty: High to Low
                        </button>
                    </div>
                )}
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
