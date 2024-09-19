import { IIconProps } from "../../types";

export const CrossIcon = ({ className }: IIconProps): JSX.Element => {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 3.5L3.5 10.5"
        stroke="#354451"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 3.5L10.5 10.5"
        stroke="#354451"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
