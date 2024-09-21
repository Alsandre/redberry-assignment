type TErrorMessageProps = {
  message: string;
};
export const ErrorMessage = ({ message }: TErrorMessageProps) => {
  return (
    <div
      className="flex items-center justify-center p-4 bg-red-100 border border-red-400 text-red-700 rounded-md"
      role="alert"
    >
      <svg
        className="w-6 h-6 text-red-500 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.364 5.636l-6.364 6.364-6.364-6.364M5.636 18.364l6.364-6.364 6.364 6.364"
        ></path>
      </svg>
      <span>{message}</span>
    </div>
  );
};
