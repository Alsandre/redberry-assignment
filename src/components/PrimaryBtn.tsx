import { ReactNode } from "react";
import { Button } from "./ui/Button";
import { EButtonTypes } from "../types";

const variantStyles = {
  GHOST:
    "text-rdbryPrimary-100 border border-solid border-1 border-rdbryPrimary-100 bg-rdbryText-50 px-4 py-[10px] rounded-[10px] font-medium hover:text-rdbryText-50 hover:bg-rdbryPrimary-100",
  DEFAULT:
    "text-rdbryText-50 bg-rdbryPrimary-100 px-4 py-[10px] rounded-[10px] font-medium hover:bg-rdbryPrimary-200",
};
export enum EPrimaryButtonVariants {
  GHOST = "GHOST",
  DEFAULT = "DEFAULT",
}

interface IPrimaryBtnProps {
  icon?: ReactNode;
  variant?: EPrimaryButtonVariants;
  label: string;
  onClick?: () => void;
  className?: string;
  type?: EButtonTypes;
}

export const PrimaryBtn: React.FC<IPrimaryBtnProps> = ({
  icon,
  variant = EPrimaryButtonVariants.DEFAULT,
  label,
  onClick,
  className,
  type = EButtonTypes.DEFAULT,
}) => {
  return (
    <>
      <Button
        className={`${variantStyles[variant]} ${className}`}
        onClick={onClick}
        type={type}
      >
        {icon ?? ""}
        {label}
      </Button>
    </>
  );
};
