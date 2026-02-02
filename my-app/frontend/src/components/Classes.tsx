import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { Class } from "../types";
import JobsFilter from "./filters/JobsFilter";
import { type Job } from "../constants/jobs";
import { type Origin } from "../constants/origins";
import OriginFilter from "./filters/OriginsFilter";

export default function Classes() {
    const [classes, setClasses] = useState<Class[]>([]);
    const [job, setJob] = useState<Job>("all");
    const [origin, setOrigin] = useState<Origin>("explorer");

    const [activeFilter, setActiveFilter] = useState<"job" | "origin">("job");

    const handleFilterSwitch = (filter: "job" | "origin") => {
        setActiveFilter(filter);

        if (filter === "job") {
            setJob("all");
        } else if (filter === "origin") {
            setOrigin("explorer");
        }
    };

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                let url = "http://localhost:5000/classes";

                if (activeFilter === "job") {
                    url =
                        job === "all"
                            ? "http://localhost:5000/classes"
                            : `http://localhost:5000/classes/job?name=${job}`;
                } else if (activeFilter === "origin") {
                    url = `http://localhost:5000/classes/origin?name=${origin}`;
                }

                const response = await fetch(url, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                });

                const data = await response.json();

                if (!response.ok || data.error) {
                    console.error({
                        status: response.status,
                        data: data.error,
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
        <div>
            <h1>Classes</h1>
            <div className="flex gap-6 justify-end border-b border-white/20">
                <button onClick={() => handleFilterSwitch("job")} 
                    className={`pb-2 transition 
                        ${activeFilter === "job"
                            ? "font-semibold border-b-2 border-white"
                            : "text-white/60 hover:text-white"
                        }`}>
                            Jobs
                </button>
                <button onClick={() => handleFilterSwitch("origin")} 
                    className={`pb-2 transition 
                        ${activeFilter === "origin"
                            ? "font-semibold border-b-2 border-white"
                            : "text-white/60 hover:text-white"
                        }`}>
                            Origin
                </button>
            </div>
            
            <div className="pt-4 pb-4">
                {/* Show fiter based on active filter */}
                {activeFilter === "job" && (
                    <JobsFilter activeJob={job} onChange={setJob} />
                )}
                
                {activeFilter === "origin" && (
                    <OriginFilter activeOrigin={origin} onChange={setOrigin} />
                )}
            </div>
            

            {/* Classes list */}
            {classes.map((cls) => (
                <Link
                    key={cls.id}
                    to={`/classes/${cls.id}`}
                    style={{ display: "block" }}
                >
                    {cls.name}
                </Link>
            ))}
        </div>
    );
}
