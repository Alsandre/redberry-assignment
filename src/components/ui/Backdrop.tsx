import { createPortal } from "react-dom";

type TBackdropProps = { onClick: () => void };
export const Backdrop = ({ onClick }: TBackdropProps): JSX.Element => {
  return createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-0 z-10"
      onClick={onClick}
    ></div>,
    document.body
  );
};
