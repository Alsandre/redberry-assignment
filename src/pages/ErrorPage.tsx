export const ErrorPage = (): JSX.Element => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-rdbryPrimary-100 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4 animate-bounce">
            Oops!
          </h1>
          <p className="text-2xl text-white mb-6">
            This is not where you wish to <span className="italic">BE!</span>
          </p>
          <a
            href="/"
            className="px-6 py-3 bg-white text-purple-700 font-semibold text-lg rounded-full shadow-md hover:bg-purple-200 transition duration-300 ease-in-out"
          >
            Go Home
          </a>
        </div>
      </div>
    </>
  );
};
