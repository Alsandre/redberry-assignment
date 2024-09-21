import { useNavigate } from "react-router-dom";
import { IEstateListProps } from "../types";
import { Card } from "./ui";
import { useState } from "react";
import { ESTATE_PER_SCREEN } from "../constants";
import { EPrimaryButtonVariants, PrimaryBtn } from "./PrimaryBtn";
import { generateUID } from "../utils/generateUID";
import { Loading } from "./Loading";

export const EstateList = ({
  data,
  isError,
  isLoading,
  refetch,
}: IEstateListProps): JSX.Element => {
  const previousScrollPosition = window.pageYOffset;
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
  setTimeout(() => {
    window.scrollTo(0, previousScrollPosition);
  }, 0);
  return (
    <div className="flex flex-wrap gap-5 items-center justify-center mt-[77px]">
      {isError && <button onClick={() => refetch()}>Try again</button>}
      {isLoading && <Loading />}
      {dataToRender &&
        dataToRender.map((estate) => (
          <Card
            key={generateUID()}
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
