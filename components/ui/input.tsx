import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon, className, ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="text-sm font-medium text-gray-100 block">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={`w-full rounded-full
              border-2 border-transparent
             bg-white
              px-4 py-3.5
              text-sm text-gray-900
             placeholder:text-gray-400
             focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50
              ${icon ? "pl-14" : ""}
              ${className}`}
            {...props}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
