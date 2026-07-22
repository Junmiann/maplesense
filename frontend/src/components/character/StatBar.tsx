type StatBarProps = {
  value: number;
};

export default function StatBar({ value }: StatBarProps) {
  const safeValue = Math.max(0, Math.min(5, Math.round(value)));

  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < safeValue;

        return (
          <div
            key={i}
            className={`h-9 p-4
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
