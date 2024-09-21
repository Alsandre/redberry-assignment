import { useNavigate } from "react-router-dom";
import { IEstateListProps } from "../types";
import { Card } from "./ui";
import { useState } from "react";
import { ESTATE_PER_SCREEN } from "../constants";
import { EPrimaryButtonVariants, PrimaryBtn } from "./PrimaryBtn";

export const EstateList = ({
  data,
  isError,
  isLoading,
  refetch,
}: IEstateListProps): JSX.Element => {
  const navigate = useNavigate();
  const [currentlyRenderingCount, setCurrentlyRenderingCount] =
    useState(ESTATE_PER_SCREEN);
  const totalEstateCount = data?.length ?? 0;
  const hasMoreToRender = totalEstateCount > currentlyRenderingCount;
  const dataToRender = data?.slice(0, currentlyRenderingCount);
  const handleLoadMore = () => {
    totalEstateCount - currentlyRenderingCount > ESTATE_PER_SCREEN
      ? setCurrentlyRenderingCount((prev) => prev + ESTATE_PER_SCREEN)
      : setCurrentlyRenderingCount(totalEstateCount);
  };
  return (
    <div className="flex flex-wrap gap-5 items-center justify-center mt-[77px]">
      {/* TODO - create components for error and loading states */}
      {isError && <button onClick={() => refetch()}>Try again</button>}
      {isLoading && <p>Please Wait. Loading ...</p>}
      {dataToRender &&
        dataToRender.map((estate, index) => (
          //TODO - unique id generator
          <Card
            key={`${index}_${estate.id}_${estate.zip_code}`}
            {...estate}
            onClick={() => navigate(`/estate/${estate.id}`)}
          />
        ))}
      {hasMoreToRender && (
        <PrimaryBtn
          label="მეტის ნახვა"
          variant={EPrimaryButtonVariants.GHOST}
          onClick={handleLoadMore}
        />
      )}
    </div>
  );
};
