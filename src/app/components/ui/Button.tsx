import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent";
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[#7F77DD] text-white border-[#3C3489] hover:bg-[#534AB7]",
    secondary:
      "bg-white text-[#26215C] border-[#D3D1C7] hover:border-[#7F77DD]",
    accent:
      "bg-[#FAC775] text-[#412402] border-[#854F0B] hover:bg-[#EF9F27]",
  };

  return (
    <button
      onClick={onClick}
      className={`font-extrabold text-sm px-4 py-2 rounded-xl border-[2.5px] transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}