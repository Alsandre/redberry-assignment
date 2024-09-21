import { useNavigate, useParams } from "react-router-dom";
import { useEstateById, useEstatesList } from "../services";
import { Card } from "./ui";
import { generateUID } from "../utils/generateUID";

export const EstateSliderSection = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const idToNum = Number(id);
  const { isLoading, isError, data: estatesList } = useEstatesList();
  const { data } = useEstateById(idToNum);
  const currentCity = data?.city_id;

  // TODO - filter out current estate
  const estatesByCity = estatesList?.filter(
    (estate) => estate.city_id == currentCity
  );
  return (
    <>
      <div>
        {/* TODO - error and loading components */}
        {isLoading && <p>Loading ... Slider</p>}
        {isError && <p>Something went wrong! Slider</p>}
        {estatesByCity?.map((estate) => (
          <Card
            key={generateUID()}
            {...estate}
            onClick={() => navigate(`/estate/${estate.id}`)}
          />
        ))}
      </div>
    </>
  );
};
