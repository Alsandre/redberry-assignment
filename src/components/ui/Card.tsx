import { ICardProps } from "../../types";

export const Card = ({ onClick, children }: ICardProps): JSX.Element => {
  return (
    <div
      onClick={onClick}
      className="w-[384px] h-[455px] relative border border-solid border-rdbryBorder-50 rounded-[14px] overflow-hidden cursor-pointer transform transition-transform duration-200 hover:shadow-custom-shadow"
    >
      {children}
    </div>
  );
};
