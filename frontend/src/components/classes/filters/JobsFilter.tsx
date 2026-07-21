import { JOBS, type Job } from '../../../constants';

type JobsFilterProps = {
    activeJob: Job;
    onChange: (job: Job) => void;
};

export default function JobsFilter({
    activeJob,
    onChange,
}: JobsFilterProps) {
    return (
        <div className="border-b border-[#718088]/20">
            {JOBS.map((job) => (
                <button
                    key={job}
                    onClick={() => onChange(job)}
                    className={`pb-2 mr-6 transition
                        ${activeJob === job
                            ? "font-bold md:border-b-2 border-[#718088]"
                            : "text-[#adb6bb] hover:text-[#B1E1E9] hover:font-bold"
                        }`}>
                            {job.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
