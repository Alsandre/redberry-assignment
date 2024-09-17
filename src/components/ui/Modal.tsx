import { useState } from "react";
import { IModalProps } from "../../types";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export const Modal: React.FC<IModalProps> = ({ children, title }) => {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-rdbryBackdrop backdrop-blur-sm"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left"
          >
            <DialogTitle as="h3">{title}</DialogTitle>
            <div className="mt-2">{children}</div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
