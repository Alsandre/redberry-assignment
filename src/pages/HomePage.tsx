import { EstateList } from "../components/EstateList";
import { useEstatesList } from "../services";

export const HomePage = (): JSX.Element => {
  useEstatesList();
  return (
    <>
      <div className="flex justify-between">
        <span>filters tab</span>
        <div>actions</div>
      </div>
      <span>selected filters</span>
      <EstateList />
    </>
  );
};
