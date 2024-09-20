export const Footer = (): JSX.Element => {
  return (
    <footer className="text-center p-4 bg-gray-200 flex items-center justify-center mt-16">
      <p className="flex gap-1 items-center">
        <span>
          Produced with care, commitment &{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by{" "}
        </span>
        @Alsandre
        <span className="flex items-center gap-2 p-1 justify-center bg-gray-300 rounded-lg">
          <a
            href="https://github.com/Alsandre"
            target="_blank"
            className="transition-transform duration-300 transform hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-4 h-4 inline"
            >
              <path d="M8 .15c-4.418 0-8 3.582-8 8 0 3.536 2.186 6.56 5.207 7.595.38.069.52-.165.52-.367 0-.184-.007-.798-.011-1.445-2.12.459-2.573-1.025-2.573-1.025-.348-.884-.85-1.12-.85-1.12-.694-.474.052-.465.052-.465.768.054 1.171.788 1.171.788.683 1.164 1.791.827 2.224.633.069-.493.267-.827.485-1.016-1.69-.192-3.47-.845-3.47-3.764 0-.831.296-1.508.783-2.036-.078-.192-.34-.968.075-2.017 0 0 .636-.204 2.08.78.604-.168 1.25-.253 1.894-.256.644.003 1.29.088 1.894.256 1.444-.983 2.08-.78 2.08-.78.416 1.049.154 1.825.076 2.017.487.528.783 1.205.783 2.036 0 2.925-1.783 3.572-3.475 3.764.273.235.517.697.517 1.404 0 1.013-.009 1.832-.011 2.08 0 .205.139.443.524.367C13.814 14.71 16 11.686 16 8.15c0-4.418-3.582-8-8-8z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/alsandre/"
            target="_blank"
            className="transition-transform duration-300 transform hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-4 h-4 inline"
            >
              <path d="M1.75 0A1.75 1.75 0 0 0 0 1.75v12.5A1.75 1.75 0 0 0 1.75 16h12.5A1.75 1.75 0 0 0 16 14.25V1.75A1.75 1.75 0 0 0 14.25 0h-12.5zM5.25 14.25H3.75V6.75h1.5v7.5zM4.5 5.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm8.25 9.75h-1.5v-4.25c0-1.012-.019-2.316-1.4-2.316-1.4 0-1.615 1.095-1.615 2.236v4.33h-1.5v-7.5h1.5v1.02h.019c.209-.394.722-1.018 1.487-1.018 1.585 0 1.875 1.042 1.875 2.393v5.105z" />
            </svg>
          </a>
        </span>
      </p>
    </footer>
  );
};
