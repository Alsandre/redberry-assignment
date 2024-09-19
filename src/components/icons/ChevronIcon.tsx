import { IIconProps } from "../../types";

export const ChevronIcon = ({ className }: IIconProps): JSX.Element => {
  return (
    <svg
      className={`fill-current ${className}`}
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.91232 5.33785C3.68451 5.11004 3.31516 5.11004 3.08736 5.33785C2.85955 5.56565 2.85955 5.935 3.08736 6.1628L6.58736 9.6628C6.81516 9.89061 7.18451 9.89061 7.41232 9.6628L10.9123 6.1628C11.1401 5.935 11.1401 5.56565 10.9123 5.33785C10.6845 5.11004 10.3152 5.11004 10.0874 5.33785L6.99984 8.42537L3.91232 5.33785Z"
        fill="current"
      />
    </svg>
  );
};
