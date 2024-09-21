import { ERangeFilterLabel, IGetEstateById } from "../types";
import { priceFormatter } from "../utils/priceFormater";
import { AreaIcon, BedroomsIcon, LocationIcon, PostalIcon } from "./icons";

export const EstateData = ({
  price,
  city,
  address,
  area,
  bedrooms,
  zip_code,
  description,
}: IGetEstateById): JSX.Element => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-6">
        <span className="font-bold text-[48px] text-rdbryText-300 leading-[57.6px]">
          {priceFormatter(price, ", ")}
        </span>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1 text-[24px] text-rdbryShade-200 leading-[28.8px] font-regular">
            <LocationIcon className="w-[22px] h-[22px]" />
            <span>{`${city.name}, ${address}`}</span>
          </div>
          <div className="flex items-center gap-1 text-[24px] text-rdbryShade-200 leading-[28.8px] font-regular">
            <AreaIcon className="w-[22px] h-[22px]" />
            <span>{`${area} ${ERangeFilterLabel.AREA}`}</span>
          </div>
          <div className="flex items-center gap-1 text-[24px] text-rdbryShade-200 leading-[28.8px] font-regular">
            <BedroomsIcon className="w-[22px] h-[22px]" />
            <span>{`საძინებელი ${bedrooms}`}</span>
          </div>
          <div className="flex items-center gap-1 text-[24px] text-rdbryShade-200 leading-[28.8px] font-regular">
            <PostalIcon className="w-[22px] h-[22px]" />
            <span>{`საფოსტო ინდექსი ${zip_code}`}</span>
          </div>
        </div>
      </div>
      <div className="flex w-[503px] h-[168px] py-3 items-center justify-start">
        <span className="text-[16px] text-rdbryShade-200 leading-[26px] font-regular">
          {description}
        </span>
      </div>
    </div>
  );
};
