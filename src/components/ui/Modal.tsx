import { IModalProps } from "../../types";

export const Modal = ({ children }: IModalProps): JSX.Element => {
  return (
    <div className="relative z-10" aria-modal="true">
      {/* backdrop */}
      <div
        className="fixed inset-0 bg-rdbryBackdrop transition-opacity backdrop-blur-sm"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        {children}
      </div>
    </div>
  );
};
