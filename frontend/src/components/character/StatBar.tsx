type StatBarProps = {
  value: number;
};

export default function StatBar({ value }: StatBarProps) {
  const safeValue = Math.max(0, Math.min(5, Math.round(value)));

  return (
    <div className="flex flex-1 min-w-0 border-2 border-[#71808850] rounded-sm lg:border-none">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < safeValue;

        return (
          <div
            key={i}
            className={`flex-1 h-9
              ${filled 
                ? "bg-[#ffae6e] border-[1.5px]"
                : "bg-transparent"
              }`}
          />
        );
      })}
    </div>
  );
}
