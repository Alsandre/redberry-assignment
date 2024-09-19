import { useLocation, useNavigate, useParams } from "react-router-dom";
import { EstateImagePreview } from "./EstateImagePreview";
import { useDeleteEstate, useEstateById } from "../services";
import { EstateData } from "./EstateData";
import { AgentCard } from "./AgentCard";
import { Button } from "./ui/Button";
import { useState } from "react";
import { ConfirmationModal } from "./ConfirmationModal";

export const EstateDetailsSection = (): JSX.Element => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { mutate } = useDeleteEstate();
  const idToNum = Number(id);
  const { isLoading, isError, data } = useEstateById(idToNum);
  const location = useLocation();
  const image = location.state?.image;

  const handleDeleteEstate = () => {
    setIsConfirmModalOpen(true);
  };
  const handleConfirm = () => {
    if (data) {
      mutate(data?.id);
    }
    setIsConfirmModalOpen(false);
    navigate("/");
  };
  const handleClose = () => {
    setIsConfirmModalOpen(false);
  };
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
            <div>
              <EstateData {...data} />
              <AgentCard {...data.agent} />
            </div>
            <Button
              onClick={() => handleDeleteEstate()}
              className="px-[10px] py-[10px] border border-solid border-1 border-rdbryBorder-100 rounded-lg text-[12px] text-rdbryBorder-100 font-medium leading-[14.4px] hover:bg-rdbryBorder-100 hover:text-rdbryText-100"
            >
              ლისტინგის წაშლა
            </Button>
          </div>
        </div>
      )}
      <ConfirmationModal
        isModalOpen={isConfirmModalOpen}
        onClose={() => handleClose()}
        onConfirm={() => handleConfirm()}
      />
    </div>
  );
};
