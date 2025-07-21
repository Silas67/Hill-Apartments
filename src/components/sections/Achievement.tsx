import React from "react";
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
    <div ref={ref} className="text-center">
      <NumberFlow
        value={value}
        suffix={suffix}
        className="md:text-[50px] text-[30px] "
      />
    </div>
  );
};

export default AchievementStat;
