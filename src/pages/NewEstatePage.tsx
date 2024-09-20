import { NewEstateForm } from "../components";

export const NewEstatePage = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-[61px]">
      <h2 className="text-[32px] leading-[38px] font-medium text-center text-rdbryText-300">
        ლისტინგის დამატება
      </h2>
      <NewEstateForm />
    </div>
  );
};
