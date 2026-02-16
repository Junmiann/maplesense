import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { Class } from "../../types";
import { type Job } from "../../constants/jobs";
import { type Origin } from "../../constants/origins";
import ClassesFilters from "./ClassesFilters";

type FilterMode = "job" | "origin";

function buildUrl(activeFilter: FilterMode, job: Job, origin: Origin) {
    const baseUrl = "http://localhost:5000/classes";

    if (activeFilter === "job") {
        return job === "all" 
        ? baseUrl
        : `${baseUrl}/job?name=${job}`;
    }

    return `${baseUrl}/origin?name=${origin}`;
}

export default function Classes() {
    const [classes, setClasses] = useState<Class[]>([]);
    const [job, setJob] = useState<Job>("all");
    const [origin, setOrigin] = useState<Origin>("explorer");
    const [activeFilter, setActiveFilter] = useState<FilterMode>("job");

    const handleFilterSwitch = (filter: FilterMode) => {
        setActiveFilter(filter);
        if (filter === "job") {
            setJob("all");
        } else {
            setOrigin("explorer"); 
        }
    };

    useEffect(() => {
        const fetchClasses = async () => {
        try {
            const url = buildUrl(activeFilter, job, origin);
            const response = await fetch(url);
            const data = await response.json();

            if (!response.ok || data?.error) {
                console.error({ 
                    status: response.status, 
                    data: data.error 
                });
                return;
            }

            setClasses(data);
        } catch (error) {
            console.error(error);
        }
        };

        fetchClasses();
    }, [activeFilter, job, origin]);

    return (
        <div className="flex flex-col max-w-6xl mx-auto mt-20 mb-6">
            <h1 className="uppercase text-start">Classes</h1>

            <ClassesFilters
                activeFilter={activeFilter}
                onSwitch={handleFilterSwitch}
                job={job}
                setJob={setJob}
                origin={origin}
                setOrigin={setOrigin}
            />
            
            {/* Classes list */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
                {classes.map((cls) => (
                    <Link
                        key={cls.id}
                        to={`/classes/${cls.id}`}
                        className="flex flex-col items-center gap-2 p-4 transition border rounded-lg group border-white/5 bg-white/5">
                            <img src={cls.image_url} alt={cls.name} 
                                className="drop-shadow-[0_6px_10px_#00000066] transition group-hover:drop-shadow-[0_5px_10px_#B1E1E9]"/>
                            <p className="text-sm border-t md:text-base lg:text-lg border-white/20">{cls.name}</p> 
                    </Link>
                ))}
            </div>
        </div>
    );
}
