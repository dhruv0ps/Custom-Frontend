import { ChevronRight } from "lucide-react";

interface HoverArrowButtonProps {
  label: string;
  onClick?: () => void;
  className?: string; 
  textClass?: string; 
  hoverTextClass?: string; 
}

const HoverArrowButton = ({
  label,
  onClick,
  className = "",
  textClass = "",
  hoverTextClass = "",
}: HoverArrowButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`group relative transition-all duration-300 overflow-hidden min-w-[140px] text-center ${className}`}
    >
      {/* Default Text */}
      <span className={`block transition-opacity duration-200 group-hover:opacity-0 ${textClass}`}>
        {label}
      </span>

      {/* Hover Text + Arrow */}
      <span
        className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${hoverTextClass}`}
      >
        {label}
        <ChevronRight className="ml-2 h-5 w-5" />
      </span>
    </button>
  );
};

export default HoverArrowButton;
