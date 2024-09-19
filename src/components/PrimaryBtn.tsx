import { ReactNode } from "react";
import { Button } from "./ui/Button";

const variantStyles = {
  GHOST:
    "text-rdbryPrimary-100 border border-solid border-1 border-rdbryPrimary-100 bg-rdbryText-100 px-4 py-[10px] rounded-[10px] font-medium hover:text-rdbryText-100 hover:bg-rdbryPrimary-100",
  DEFAULT:
    "text-rdbryText-100 bg-rdbryPrimary-100 px-4 py-[10px] rounded-[10px] font-medium hover:bg-rdbryPrimary-200",
};
export enum EPrimaryButtonVariants {
  GHOST = "GHOST",
  DEFAULT = "DEFAULT",
}

interface IPrimaryBtnProps {
  icon: ReactNode;
  variant: EPrimaryButtonVariants;
  label: string;
  onClick: () => void;
}

export const PrimaryBtn: React.FC<IPrimaryBtnProps> = ({
  icon,
  variant,
  label,
  onClick,
}) => {
  return (
    <>
      <Button className={variantStyles[variant]} onClick={onClick}>
        {icon ?? ""}
        {label}
      </Button>
    </>
  );
};
