import { PrimaryBtn } from "../PrimaryBtn";
import { EButtonTypes, TPopoverProps } from "../../types";
import { Backdrop } from "./Backdrop";

export const Popover: React.FC<TPopoverProps> = ({
  title,
  children,
  className,
  onClose,
}) => {
  return (
    <>
      <Backdrop onClick={onClose} />
      <div className="min-w-[282px] max-w-[785px] w-fit p-6 rounded-[10px] absolute top-[51px] left-[-6px] z-50 bg-white border border-solid border-rdbryBorder-50 shadow-custom-shadow">
        <div className="flex justify-start text-[16px] leading-[19.2px] font-medium">
          {title}
        </div>
        <div className={`${className ?? ""} mt-6 mb-8`}>{children}</div>
        <div className="flex justify-end">
          <PrimaryBtn
            label="არჩევა"
            type={EButtonTypes.SUBMIT}
            className="py-2 px-[14px] text-[14px] leading-[16.8px]"
          />
        </div>
      </div>
    </>
  );
};
