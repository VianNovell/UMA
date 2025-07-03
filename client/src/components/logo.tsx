import UMALogo from "@/components/uma-logo";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  textColor?: "dark" | "light";
}

export default function Logo({ className = "", showText = true, size = "md", textColor = "dark" }: LogoProps) {
  const sizeClasses = {
    sm: 32,
    md: 48,
    lg: 64
  };

  const textClasses = textColor === "light" 
    ? "text-white" 
    : "text-gray-900";
    
  const subtextClasses = textColor === "light" 
    ? "text-gray-300" 
    : "text-gray-500";

  return (
    <div className={`flex items-center ${className}`}>
      <UMALogo 
        size={sizeClasses[size]}
        className="flex-shrink-0"
      />
      {showText && (
        <div className="ml-3">
          <h1 className={`text-lg font-semibold ${textClasses}`}>Unique Management Associates</h1>
          <p className={`text-sm ${subtextClasses}`}>Accounting & More</p>
        </div>
      )}
    </div>
  );
}