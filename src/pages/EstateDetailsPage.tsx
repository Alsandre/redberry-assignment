import { useLocation, useParams } from "react-router-dom";
import { EstateImagePreview } from "../components/EstateImagePreview";
import { useEstateById } from "../services";

export const EstateDetailsPage = (): JSX.Element => {
  const { id } = useParams();
  const idToNum = Number(id);
  const { isLoading, isError, data } = useEstateById(idToNum);
  const location = useLocation();
  const image = location.state?.image;
  return <>{/* details section */}</>;
};
