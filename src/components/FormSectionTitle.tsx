import { TFormSectionTtle } from "../types";

export const FormSectionTitle = ({
  label,
  className,
}: TFormSectionTtle): JSX.Element => {
  return (
    <h5
      className={`text-[16px] leading-[19.5px] font-[500] font-nueue text-rdberryText-225 uppercase ${className}`}
    >
      {label}
    </h5>
  );
};
