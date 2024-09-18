import { IEstateListProps } from "../types";
import { Card } from "./ui";

export const EstateList = ({
  data,
  isError,
  isLoading,
  refetch,
}: IEstateListProps): JSX.Element => {
  return (
    <>
      {/* TODO - create components for error and loading states */}
      {isError && <button onClick={() => refetch()}>Try again</button>}
      {isLoading && <p>Please Wait. Loading ...</p>}
      {data &&
        data.map((estate, index) => (
          //TODO - unique id generator
          <Card key={`${index}_${estate.id}_${estate.zip_code}`} {...estate} />
        ))}
    </>
  );
};
