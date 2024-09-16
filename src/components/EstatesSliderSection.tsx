import { useParams } from "react-router-dom";
import { useEstateById, useEstatesList } from "../services";
import { Card } from "./ui";

export const EstateSliderSection = (): JSX.Element => {
  const { id } = useParams();
  const idToNum = Number(id);
  const { isLoading, isError, data: estatesList } = useEstatesList();
  const { data } = useEstateById(idToNum);
  const currentCity = data?.city_id;
  const estatesByCity = estatesList?.filter(
    (estate) => estate.city_id == currentCity
  );
  return (
    <>
      <div>
        {/* TODO - error and loading components */}
        {isLoading && <p>Loading ... Slider</p>}
        {isError && <p>Something went wrong! Slider</p>}
        {estatesByCity?.map((city) => <Card {...city} />)}
      </div>
    </>
  );
};
