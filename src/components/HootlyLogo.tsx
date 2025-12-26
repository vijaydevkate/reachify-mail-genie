interface HootlyLogoProps {
  className?: string;
  size?: number;
}

const HootlyLogo = ({ className = "", size = 32 }: HootlyLogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="owlGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(270, 100%, 65%)" />
          <stop offset="50%" stopColor="hsl(320, 100%, 60%)" />
          <stop offset="100%" stopColor="hsl(200, 100%, 60%)" />
        </linearGradient>
      </defs>
      
      {/* Owl body/head shape */}
      <ellipse cx="24" cy="26" rx="18" ry="16" fill="url(#owlGradient)" />
      
      {/* Ears/horns */}
      <path
        d="M10 16 L6 6 L14 12 Z"
        fill="url(#owlGradient)"
      />
      <path
        d="M38 16 L42 6 L34 12 Z"
        fill="url(#owlGradient)"
      />
      
      {/* Left eye */}
      <circle cx="16" cy="24" r="7" fill="hsl(240, 15%, 3%)" />
      <circle cx="16" cy="24" r="5" fill="white" />
      <circle cx="17" cy="23" r="2.5" fill="hsl(240, 15%, 3%)" />
      <circle cx="18" cy="22" r="1" fill="white" />
      
      {/* Right eye */}
      <circle cx="32" cy="24" r="7" fill="hsl(240, 15%, 3%)" />
      <circle cx="32" cy="24" r="5" fill="white" />
      <circle cx="33" cy="23" r="2.5" fill="hsl(240, 15%, 3%)" />
      <circle cx="34" cy="22" r="1" fill="white" />
      
      {/* Beak */}
      <path
        d="M24 28 L21 33 L24 36 L27 33 Z"
        fill="hsl(45, 100%, 55%)"
      />
    </svg>
  );
};

export default HootlyLogo;
