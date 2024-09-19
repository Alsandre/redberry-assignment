import { IModalProps } from "../../types";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

export const Modal: React.FC<IModalProps> = ({
  children,
  isOpen,
  onClose,
  className,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-rdbryBackdrop backdrop-blur-sm"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className={`relative transform overflow-hidden bg-white text-left ${className}`}
          >
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
