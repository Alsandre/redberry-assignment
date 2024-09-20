import { ECheckBoxVariants, ICheckBoxProps } from "../../types";

export const CheckBoxIcon = ({
  className,
  varaint,
}: ICheckBoxProps): JSX.Element => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {varaint === ECheckBoxVariants.CHECKED ? (
        <>
          <rect width="20" height="20" rx="2" fill="#45A849" />
          <path
            d="M15.4546 5.4541L8.57959 13.6359L5.45459 9.91691"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ) : (
        <rect
          x="0.5"
          y="0.5"
          width="19"
          height="19"
          rx="1.5"
          stroke="#DBDBDB"
        />
      )}
    </svg>
  );
};
