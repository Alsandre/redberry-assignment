import { useEffect, useState } from "react";
import { EstateList } from "../components/EstateList";
import { FiltersPanel } from "../components/FiltersPanel";
import { useEstatesList } from "../services";
import { IFilters, IGetEstatesList } from "../types";
import { handleFiltering } from "../utils/handleFiltering";
import { PlusIcon } from "../components/icons";
import { EPrimaryButtonVariants, PrimaryBtn } from "../components/PrimaryBtn";
import { Modal } from "../components/ui/Modal";
import { NewAgentForm } from "../components/NewAgentForm";
import { useNavigate } from "react-router-dom";

export const HomePage = (): JSX.Element => {
  const { data, isLoading, isError, refetch } = useEstatesList();
  const [filteredData, setFilteredData] = useState<IGetEstatesList[]>();
  const [isAddAgentModalOpen, setIsAddAgentModalOpen] = useState(false);
  const [restoredFilters, setRestoredFilters] = useState<IFilters | null>(null);
  const navigate = useNavigate();

  const handleFilterchange = (filterData: IFilters) => {
    if (isLoading && !data) {
      setRestoredFilters(filterData);
    }
    if (data && !isLoading) {
      const filteredData = handleFiltering(filterData, data);
      setFilteredData(filteredData);
    }
  };

  const handleCloseAgentModal = () => {
    setIsAddAgentModalOpen(false);
  };

  useEffect(() => {
    if (data && !filteredData) {
      setFilteredData(data);
    }
    if (restoredFilters && data) {
      const filteredData = handleFiltering(restoredFilters, data);
      setFilteredData(filteredData);
    }
  }, [data]);

  return (
    <>
      <div className="flex justify-between mt-[77px]">
        <FiltersPanel onFilterChange={handleFilterchange} />
        <div className="flex gap-4">
          <PrimaryBtn
            variant={EPrimaryButtonVariants.DEFAULT}
            onClick={() => navigate("/add-estate")}
            label="ლისტინგის დამატება"
            icon={<PlusIcon />}
          />
          <PrimaryBtn
            variant={EPrimaryButtonVariants.GHOST}
            onClick={() => setIsAddAgentModalOpen(true)}
            label="აგენტის დამატება"
            icon={<PlusIcon />}
          />
        </div>
      </div>
      <EstateList {...{ data: filteredData, isError, isLoading, refetch }} />
      <Modal isOpen={isAddAgentModalOpen} onClose={handleCloseAgentModal}>
        <NewAgentForm onClose={handleCloseAgentModal} />
      </Modal>
    </>
  );
};
