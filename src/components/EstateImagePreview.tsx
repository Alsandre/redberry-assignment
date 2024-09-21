import { IEstateImagePreviewProps } from "../types";
import { dateFormatter } from "../utils/dateFormatter";

export const EstateImagePreview = ({
  is_rental,
  image,
  alt_description,
  created_at,
}: IEstateImagePreviewProps): JSX.Element => {
  return (
    <div className="relative w-[839px] h-[670px] rounded-t-[14px]">
      <span className="absolute top-[23px] left-[23px] tag-chip-lg">
        {!!is_rental ? "ქირავდება" : "იყიდება"}
      </span>
      <img
        className="w-full h-full rounded-t-[14px]"
        src={image}
        alt={alt_description}
      />
      <div className="text-[16px] leading-[19px] text-rdbryShade-200 flex gap-[10px] absolute bottom-[-30px] right-0">
        <span>გამოქვეყნების თარიღი</span>
        <span>{dateFormatter(created_at)}</span>
      </div>
    </div>
  );
};
