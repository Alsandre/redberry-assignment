import { useLocation, useParams } from "react-router-dom";
import { EstateImagePreview } from "./EstateImagePreview";
import { useEstateById } from "../services";
import { EstateData } from "./EstateData";
import { AgentCard } from "./AgentCard";

export const EstateDetailsSection = (): JSX.Element => {
  const { id } = useParams();
  const idToNum = Number(id);
  const { isLoading, isError, data } = useEstateById(idToNum);
  const location = useLocation();
  const image = location.state?.image;
  return (
    <div>
      {/* TODO - add loading and error component */}
      {isLoading && <p>Loading ... Details</p>}
      {isError && <p>Something went wrong! Details</p>}
      {data && (
        <div>
          <EstateImagePreview
            image={image}
            alt_description={data.description}
            is_rental={data.is_rental}
            created_at={data.created_at}
          />
          <div>
            <EstateData {...data} />
            <AgentCard {...data.agent} />
          </div>
        </div>
      )}
    </div>
  );
};
