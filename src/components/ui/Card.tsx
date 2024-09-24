import { ICardProps } from "../../types";

export const Card = ({
  onClick,
  children,
  className,
}: ICardProps): JSX.Element => {
  return (
    <div
      onClick={onClick}
      className={`relative border border-solid border-rdbryBorder-50 overflow-hidden ${className ?? ""}`}
    >
      {children}
    </div>
  );
};
