import { IModalProps } from "../../types";

export const Modal: React.FC<IModalProps> = ({ children, onClose }) => {
  return (
    <div className="relative z-10" aria-modal="true">
      {/* backdrop */}
      <div
        className="fixed inset-0 bg-rdbryBackdrop transition-opacity backdrop-blur-sm"
        aria-hidden="true"
      ></div>

      <div
        className="fixed inset-0 z-10 w-screen overflow-y-auto"
        onClick={onClose}
      >
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
