"use client";

import { cn } from "@/lib/utils";
interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const Wrapper = ({ children, className, ...props }: WrapperProps) => {
  return (
    <div
      {...props}
      className={cn(
        "text-grayRo container mx-auto  flex w-full max-w-[1220px] flex-col	justify-between gap-12",
        className,
      )}
    >
      {children}
    </div>
  );
};
