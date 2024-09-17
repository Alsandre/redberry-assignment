import { IEstateImagePreviewProps } from "../types";

export const EstateImagePreview = ({
  is_rental,
  image,
  alt_description,
  created_at,
}: IEstateImagePreviewProps): JSX.Element => {
  return (
    <div>
      <span className="absolute top-[23px] left-[23px] tag-chip">
        {!!is_rental ? "ქირავდება" : "იყიდება"}
      </span>
      <img src={image} alt={alt_description} />
      <div>
        <span>გამოქვეყნების თარიღი</span>
        {/* TODO - date formatter */}
        <span>{created_at}</span>
      </div>
    </div>
  );
};
