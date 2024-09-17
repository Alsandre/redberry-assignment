import { EstateList } from "../components/EstateList";

export const HomePage = (): JSX.Element => {
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
