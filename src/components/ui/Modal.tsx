import { IModalProps } from "../../types";

export const Modal: React.FC<IModalProps> = ({ children, onClose }) => {
  return (
    <div className="relative z-10" aria-modal="true">
      {/* backdrop */}
      <div
        className="fixed inset-0 bg-rdbryBackdrop transition-opacity backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        {children}
      </div>
    </div>
  );
};
