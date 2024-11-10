import React from "react";
import { cn } from "../../utils/cn";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-3xl bg-gradient-to-r from-cyber-blue via-cyber-pink to-cyber-blue",
          animate && "animate-gradient",
          className
        )}
      />
      <div className="relative bg-cyber-darker rounded-3xl p-4">{children}</div>
    </div>
  );
};