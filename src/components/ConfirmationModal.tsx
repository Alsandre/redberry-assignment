import { IConfirmationModalProps } from "../types";
import { CrossIcon } from "./icons";
import { Button } from "./ui/Button";
import { Modal } from "./ui/Modal";

export const ConfirmationModal: React.FC<IConfirmationModalProps> = ({
  onClose,
  onConfirm,
  isModalOpen,
}) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={onClose}
      className="relative w-[623px] h-[222px] rounded-[20px] flex flex-col items-center gap-[35px] justify-center"
    >
      <span
        onClick={onClose}
        className="absolute top-5 right-[30px] cursor-pointer"
      >
        <CrossIcon className="w-5 h-5" />
      </span>
      <span className="font-regular text-[20px] leading-[24px] text-rdbryText-250">
        გსურთ წაშალოთ ლისტინგი?
      </span>
      <div className="flex gap-[15px]">
        <Button
          onClick={onClose}
          className="text-rdbryPrimary-100 border border-solid border-1 border-rdbryPrimary-100 bg-rdbryText-100 px-4 py-[10px] rounded-[10px] font-medium w-fit"
        >
          გაუქმება
        </Button>
        <Button
          onClick={onConfirm}
          className="text-rdbryText-100 bg-rdbryPrimary-100 px-4 py-[10px] rounded-[10px] font-medium w-fit"
        >
          დადასტურება
        </Button>
      </div>
    </Modal>
  );
};
