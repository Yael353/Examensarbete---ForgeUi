// Input.tsx
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({ id, className, ...props }) => {
  return (
    <input
      id={id}
      className={`
        w-full rounded-md border border-gray-300 dark:border-gray-600 
        bg-white dark:bg-primary text-gray-900 dark:text-gray-100 
        px-4 py-2 
        placeholder-gray-400 dark:placeholder-gray-500
        focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent
        transition
        ${className ?? ""}
      `}
      {...props}
    />
  );
};
