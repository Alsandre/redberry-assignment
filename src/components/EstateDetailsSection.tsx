import { useNavigate, useParams } from "react-router-dom";
import { EstateImagePreview } from "./EstateImagePreview";
import { useDeleteEstate, useEstateById } from "../services";
import { EstateData } from "./EstateData";
import { AgentCard } from "./AgentCard";
import { Button } from "./ui/Button";
import { useState } from "react";
import { ConfirmationModal } from "./ConfirmationModal";
import { ArrowLeftIcon } from "./icons";

export const EstateDetailsSection = (): JSX.Element => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { mutate } = useDeleteEstate();
  const idToNum = Number(id);
  const { isLoading, isError, data } = useEstateById(idToNum);
  console.log(data);
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
    <div className="mt-[125px] relative">
      <span
        onClick={() => navigate("/")}
        className="absolute top-[-66px] left-[5px] z-50 cursor-pointer"
      >
        <ArrowLeftIcon />
      </span>
      {/* TODO - add loading and error component */}
      {isLoading && <p>Loading ... Details</p>}
      {isError && <p>Something went wrong! Details</p>}
      {data && (
        <div className="flex gap-[68px]">
          <EstateImagePreview
            image={data.image}
            alt_description={data.description}
            is_rental={data.is_rental}
            created_at={data.created_at}
          />
          <div className="flex flex-col gap-5 mt-[30px]">
            <div className="flex flex-col">
              <EstateData {...data} />
              <AgentCard {...data.agent} />
            </div>
            <Button
              onClick={() => handleDeleteEstate()}
              className="px-[10px] py-[10px] w-fit border border-solid border-1 border-rdbryBorder-100 rounded-lg text-[12px] text-rdbryBorder-100 font-medium leading-[14.4px] hover:bg-rdbryBorder-100 hover:text-rdbrytext-50"
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
