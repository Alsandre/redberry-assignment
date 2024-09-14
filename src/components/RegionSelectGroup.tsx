import React from "react";
import { IRegionSelectGroupProps } from "../types";
import { useController } from "react-hook-form";
import { ControlledSelect } from "./ui/ContolledSelect";

export const RegionSelectGroup = React.forwardRef<
  HTMLDivElement,
  IRegionSelectGroupProps
>(({ control }) => {
  return (
    <>
      {/* <div ref={ref}> */}
      {/* <ControlledSelect control={control}/> */}
      {/* </div> */}
    </>
  );
});
