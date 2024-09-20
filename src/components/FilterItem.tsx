import { TFilterItemProps } from "../types";

export const FilterItem: React.FC<TFilterItemProps> = ({
  label,
  icon,
  children,
  onClick,
  className,
}) => {
  return (
    <div className={`${className ?? ""} relative rounded-[6px]`}>
      <span
        className="flex gap-1 items-center py-2 pl-[14px] pr-[10.5px] text-[16px] font-medium leading-[19.2px]"
        onClick={onClick}
      >
        {label} {icon}
      </span>
      {children}
    </div>
  );
};
