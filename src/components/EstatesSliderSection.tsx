import { useNavigate, useParams } from "react-router-dom";
import { useEstateById, useEstatesList } from "../services";
import { Card } from "./ui";
import { generateUID } from "../utils/generateUID";
import { ArrowLeftIcon } from "./icons";
import { Carousel } from "@alsandre/responsive-image-carousel";
import { Loading } from "./Loading";
import { ErrorMessage } from "./ErrorMessage";

export const EstateSliderSection = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const idToNum = Number(id);
  const { isLoading, isError, data: estatesList, error } = useEstatesList();
  const { data } = useEstateById(idToNum);
  const currentCity = data?.city.region_id;

  const estatesByRegion = estatesList?.filter(
    (estate) => estate.city.region_id == currentCity && estate.id !== idToNum
  );
  return (
    <>
      <div>
        {isLoading && <Loading />}
        {isError && <ErrorMessage message={error as string} />}
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
          {estatesByRegion?.map((estate) => (
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
