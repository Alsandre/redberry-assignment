import { useNavigate, useParams } from "react-router-dom";
import { useEstateById, useEstatesList } from "../services";
import { Card } from "./ui";
import { generateUID } from "../utils/generateUID";
import { ArrowLeftIcon } from "./icons";
import { Carousel } from "@alsandre/responsive-image-carousel";

export const EstateSliderSection = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const idToNum = Number(id);
  const { isLoading, isError, data: estatesList } = useEstatesList();
  const { data } = useEstateById(idToNum);
  const currentCity = data?.city_id;

  const estatesByCity = estatesList?.filter(
    (estate) => estate.city_id == currentCity && estate.id !== idToNum
  );
  return (
    <>
      <div>
        {/* TODO - error and loading components */}
        {isLoading && <p>Loading ... Slider</p>}
        {isError && <p>Something went wrong! Slider</p>}
        <Carousel
          slidesPerScreen={4}
          className="h-[455px] justify-start w-full gap-5"
          buttonIcon={<ArrowLeftIcon />}
          btnLeftClass="left-[-67px]"
          btnRightClass="rotate-180 right-[-67px]"
          controls
          isAnimated={false}
          sliderSpeed={5000}
        >
          {estatesByCity?.map((estate) => (
            <Card
              key={generateUID()}
              {...estate}
              onClick={() => navigate(`/estate/${estate.id}`)}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
};
