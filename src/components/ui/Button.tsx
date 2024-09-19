import { IButtonProps } from "../../types";

export const Button: React.FC<IButtonProps> = ({
  onClick,
  children,
  className = "",
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`focus:outline-none ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
