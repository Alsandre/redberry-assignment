import React from "react";
import { IFiltersPanelProps } from "../types";
import { useForm } from "react-hook-form";
import { CheckboxFilter, Filters } from "./CheckBoxFilter";
import { RangeFilter } from "./RangeFilter";

const defaultValues = {
  checkboxes: [],
};

export const FiltersPanel: React.FC<IFiltersPanelProps> = () => {
  const { register, watch, setValue } = useForm<Filters>({ defaultValues });
  const fields = watch();
  console.log(fields);
  return (
    <>
      <div>
        <CheckboxFilter register={register} />
        <RangeFilter register={register} setValue={setValue} />
      </div>
    </>
  );
};
