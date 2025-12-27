import hootlyLogo from "@/assets/hootly-logo.png";

interface HootlyLogoProps {
  className?: string;
  size?: number;
}

const HootlyLogo = ({ className = "", size = 32 }: HootlyLogoProps) => {
  return (
    <img
      src={hootlyLogo}
      alt="Hootly Logo"
      width={size * 3}
      height={size}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
};

export default HootlyLogo;
