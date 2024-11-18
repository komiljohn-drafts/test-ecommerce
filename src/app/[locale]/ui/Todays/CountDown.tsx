"use client";

import React from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";

export default function CountDown() {
  return <Countdown date={Date.now() + 1000 * 60 * 60 * 24 * 4} renderer={CustomCountDown} />;
}

function CustomCountDown({ days, hours, minutes, seconds, completed }: CountdownRenderProps) {
  const timeUnits = [
    { label: "Days", value: days, width: "31px" },
    { label: "Hours", value: hours, width: "35px" },
    { label: "Minutes", value: minutes, width: "49px" },
    { label: "Seconds", value: seconds, width: "52px" },
  ];

  if (completed) return <div>Countdown completed!</div>;
  return (
    <div className="flex w-[302px] h-[50px] gap-4 items-start">
      {timeUnits.map((unit, index) => (
        <React.Fragment key={unit.label}>
          <div className="flex flex-col gap-1">
            <div className={`text-xs leading-[18px] font-medium w-[${unit.width}]`}>{unit.label}</div>
            <div className="text-[30px] leading-[30px] font-bold -tracking-[0.04rem]">{unit.value}</div>
          </div>

          {index < timeUnits.length - 1 && (
            <div className="flex flex-col gap-2 self-end mb-1">
              <div className="size-1 bg-[#E07575] rounded-full" />
              <div className="size-1 bg-[#E07575] rounded-full" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
