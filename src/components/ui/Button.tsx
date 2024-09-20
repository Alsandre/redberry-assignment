import { EButtonTypes, IButtonProps } from "../../types";

export const Button: React.FC<IButtonProps> = ({
  onClick,
  children,
  className = "",
  type = EButtonTypes.DEFAULT,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`focus:outline-none flex items-center gap-[6.5px] ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
