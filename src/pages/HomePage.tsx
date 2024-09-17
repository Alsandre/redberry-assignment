import { useState } from "react";
import { EstateList } from "../components/EstateList";
import { NewAgentModal } from "../components/NewAgentModal";

export const HomePage = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between">
        <span>filters tab</span>
        <div>actions</div>
      </div>
      <span>selected filters</span>
      <EstateList />
      <button onClick={() => setIsModalOpen(true)}>add agent</button>
      {isModalOpen && <NewAgentModal />}
    </>
  );
};
