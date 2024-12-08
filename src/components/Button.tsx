import React from "react";

// Props interface for TypeScript
interface ButtonProps {
  name: string;
  className?: string; // Additional classes for customization
  borderRadius?: string; // Border radius customization
}

const Button: React.FC<ButtonProps> = ({ name, className = "", borderRadius = "0" }) => {
  // Dynamic styles based on className
  const isOutline = className.includes("outline");

  return (
    <button
      className={`px-4 py-2 font-medium text-white ${
        isOutline
          ? "bg-transparent border border-yellow-600 text-yellow-600  hover:bg-[#B88E2F] hover:text-white active:bg-white active:text-[#B88E2F] transition-all" // Outline style
          : "bg-yellow-600 text-white" // Default style
      } ${className}`}
      style={{ borderRadius }}
    >
      {name}
    </button>
  );
};

export default Button;
