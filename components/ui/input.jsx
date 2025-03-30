import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-[#b594ff] bg-[#f3e8ff] px-3 py-1 text-base text-[#2d0b49] shadow-sm transition-colors",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[#2d0b49]",
        "placeholder:text-[#845ec2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b594ff]",
        "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props} 
    />
  );
});
Input.displayName = "Input";

export { Input };
