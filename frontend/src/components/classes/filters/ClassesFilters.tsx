import JobsFilter from "./JobsFilter";
import OriginFilter from "./OriginsFilter";
import type { Job, Origin } from "../../../constants";

type FilterMode = "job" | "origin";

type Props = {
    activeFilter: FilterMode;
    onSwitch: (mode: FilterMode) => void;

    job: Job;
    setJob: (job: Job) => void;

    origin: Origin;
    setOrigin: (origin: Origin) => void;
};

export default function ClassesFilters({activeFilter, onSwitch, job, setJob, origin, setOrigin,}: Props) {
    const tabClass = (isActive: boolean) =>
        `pb-2 transition ${
            isActive
            ? "font-semibold border-b-2 border-white"
            : "text-white/60 hover:text-[#B1E1E9] hover:font-bold"
        }`;

    return (
        <>
            <div className="flex justify-end gap-6 border-b border-white/20">
                <button onClick={() => onSwitch("job")} className={tabClass(activeFilter === "job")}>Jobs</button>
                <button onClick={() => onSwitch("origin")} className={tabClass(activeFilter === "origin")}>Origin</button>
            </div>

            <div className="pt-4 pb-4">
                {activeFilter === "job" ? (
                    <JobsFilter activeJob={job} onChange={setJob} />
                ) : (
                    <OriginFilter activeOrigin={origin} onChange={setOrigin} />
                )}
            </div>
        </>
    );
}
