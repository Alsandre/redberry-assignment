import { NewAgentForm } from "./NewAgentForm";
import { Modal } from "./ui/Modal";

export const NewAgentModal = (): JSX.Element => {
  return (
    <Modal>
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <NewAgentForm />
        </div>
      </div>
    </Modal>
  );
};
