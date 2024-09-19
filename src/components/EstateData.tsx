import { IGetEstateById } from "../types";
import { AgentCard } from "./AgentCard";

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
    <div>
      <div>
        <div>
          {/* TODO - icon */}
          <span>{price}</span>
        </div>
        <div>
          {/* TODO - icon */}
          <span>{`${city}, ${address}`}</span>
        </div>
        <div>
          {/* TODO - icon */}
          <span>{area}</span>
        </div>
        <div>
          {/* TODO - icon */}
          <span>{`საძინებელი ${bedrooms}`}</span>
        </div>
        <div>
          {/* TODO - icon */}
          <span>{`საფოსტო ინდექსი ${zip_code}`}</span>
        </div>
      </div>
      <span>{description}</span>
    </div>
  );
};
