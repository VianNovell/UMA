interface UMALogoProps {
  className?: string;
  size?: number;
  variant?: 'full' | 'compact' | 'icon';
}

export default function UMALogo({ className = "", size = 48, variant = 'full' }: UMALogoProps) {
  if (variant === 'icon') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Yellow background section */}
        <rect x="0" y="0" width="100" height="75" fill="#FFD700"/>
        
        {/* Dark blue background section */}
        <rect x="0" y="75" width="100" height="25" fill="#002B45"/>
        
        {/* Magnifying glass circle */}
        <circle cx="25" cy="25" r="15" fill="none" stroke="#002B45" strokeWidth="4"/>
        
        {/* Magnifying glass handle */}
        <rect x="35" y="35" width="8" height="20" fill="#002B45" rx="4"/>
        
        {/* Briefcase body */}
        <rect x="15" y="50" width="20" height="12" fill="#002B45" rx="2"/>
        
        {/* U letter in briefcase */}
        <text x="25" y="60" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Arial, sans-serif">U</text>
        
        {/* Chart bars */}
        <rect x="55" y="45" width="8" height="30" fill="#002B45"/>
        <rect x="70" y="35" width="8" height="40" fill="#002B45"/>
        <rect x="85" y="20" width="8" height="55" fill="#002B45"/>
        
        {/* UNIQUE text */}
        <text x="50" y="90" fill="#FFD700" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="Arial, sans-serif">UNIQUE</text>
      </svg>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center ${className}`}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          className="mr-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Yellow background section */}
          <rect x="0" y="0" width="100" height="75" fill="#FFD700"/>
          
          {/* Dark blue background section */}
          <rect x="0" y="75" width="100" height="25" fill="#002B45"/>
          
          {/* Magnifying glass circle */}
          <circle cx="25" cy="25" r="15" fill="none" stroke="#002B45" strokeWidth="4"/>
          
          {/* Magnifying glass handle */}
          <rect x="35" y="35" width="8" height="20" fill="#002B45" rx="4"/>
          
          {/* Briefcase body */}
          <rect x="15" y="50" width="20" height="12" fill="#002B45" rx="2"/>
          
          {/* U letter in briefcase */}
          <text x="25" y="60" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Arial, sans-serif">U</text>
          
          {/* Chart bars */}
          <rect x="55" y="45" width="8" height="30" fill="#002B45"/>
          <rect x="70" y="35" width="8" height="40" fill="#002B45"/>
          <rect x="85" y="20" width="8" height="55" fill="#002B45"/>
          
          {/* UNIQUE text */}
          <text x="50" y="90" fill="#FFD700" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Arial, sans-serif">UNIQUE</text>
        </svg>
        <div className="text-primary">
          <div className="font-bold text-xs sm:text-sm leading-none company-name-spread whitespace-nowrap">
            UNIQUE MANAGEMENT ASSOCIATES
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width={size}
        height={size * 1.2}
        viewBox="0 0 250 300"
        className="mr-3"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Yellow background section */}
        <rect x="0" y="0" width="250" height="220" fill="#FFD700"/>
        
        {/* Dark blue background section */}
        <rect x="0" y="220" width="250" height="80" fill="#002B45"/>
        
        {/* Magnifying glass circle */}
        <circle cx="60" cy="60" r="35" fill="none" stroke="#002B45" strokeWidth="8"/>
        
        {/* Magnifying glass handle connecting to briefcase */}
        <path d="M85 85 Q95 95 95 110 L95 130" fill="none" stroke="#002B45" strokeWidth="8" strokeLinecap="round"/>
        
        {/* Briefcase body */}
        <rect x="60" y="130" width="50" height="30" fill="#002B45" rx="5"/>
        
        {/* Briefcase handle */}
        <rect x="80" y="125" width="10" height="8" fill="#002B45" rx="4"/>
        
        {/* U letter in briefcase */}
        <text x="85" y="150" fill="white" fontSize="20" fontWeight="bold" textAnchor="middle" fontFamily="Arial, sans-serif">U</text>
        
        {/* Chart bars */}
        <rect x="150" y="120" width="20" height="100" fill="#002B45"/>
        <rect x="180" y="90" width="20" height="130" fill="#002B45"/>
        <rect x="210" y="50" width="20" height="170" fill="#002B45"/>
        
        {/* UNIQUE text */}
        <text x="125" y="260" fill="#FFD700" fontSize="48" fontWeight="bold" textAnchor="middle" fontFamily="Arial, sans-serif">UNIQUE</text>
        
        {/* MANAGEMENT ASSOCIATES text */}
        <rect x="10" y="270" width="230" height="25" fill="white"/>
        <text x="125" y="287" fill="#002B45" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="Arial, sans-serif">MANAGEMENT ASSOCIATES</text>
      </svg>
    </div>
  );
}