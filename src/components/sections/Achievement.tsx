"use client";
import NumberFlow from "@number-flow/react";
import useScrollTriggeredCountUp from "@/hooks/useScrollCount";

const AchievementStat = ({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) => {
  const { ref, value } = useScrollTriggeredCountUp(target);

  return (
    <div ref={ref}>
      <NumberFlow
        value={value}
        suffix={suffix}
        className="text-[clamp(1.75rem,3.5vw,2.75rem)] leading-none tracking-tight"
      />
    </div>
  );
};

export default AchievementStat;
