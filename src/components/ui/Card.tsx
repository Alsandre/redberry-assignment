import { IEstateCardProps } from "../../types";
import { priceFormatter } from "../../utils/priceFormater";
import { PostalIcon } from "../icons/PostalIcon";

export const Card = ({
  address,
  zip_code,
  price,
  area,
  bedrooms,
  is_rental,
  city,
  image,
  onClick,
}: IEstateCardProps): JSX.Element => {
  return (
    <div
      onClick={onClick}
      className="w-[384px] h-[455px] relative border border-solid border-red-700 rounded-tr-[14px] rounded-tl-[14px] overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-[1.01]"
    >
      <span className="absolute top-[23px] left-[23px] tag-chip">
        {is_rental ? "ქირავდება" : "იყიდება"}
      </span>
      <img
        className="h-[307px] w-full object-cover"
        src={image}
        alt={address}
      />
      <div className="flex flex-col gap-5 px-[25px] py-[22px]">
        <div className="flex flex-col gap-[6px]">
          <span className="font-bold text-[28px]" aria-label={`${price}`}>
            {priceFormatter(price)}
          </span>
          <span className="card-details-text text-rdbryText-250">
            <span>{"(i)"}</span>
            {`${city.name}, ${address}`}
          </span>
        </div>
        <div className="flex gap-8 items-start">
          <span className="card-details-text text-rdbryText-250 flex gap-[5px]">
            <span>{"(i)"}</span>
            {bedrooms}
          </span>
          <span className="card-details-text text-rdbryText-250 flex gap-[5px]">
            <span>{"(i)"}</span>
            {area}
          </span>
          <span className="card-details-text text-rdbryText-250 flex gap-[5px]">
            <span>{"(i)"}</span>
            {zip_code}
          </span>
        </div>
      </div>
    </div>
  );
};
