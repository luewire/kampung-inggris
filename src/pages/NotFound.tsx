import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-md text-center">
        <h1
          className="text-9xl font-extralight select-none tracking-wide"
          style={{ color: "#808080ff" }}
        >
          404
        </h1>
        <p
          className="text-xl mt-4 mb-2 font-light"
          style={{ color: "#6D8A59" }}
        >
          Sorry, we can’t find that page.
        </p>
        <p
          className="mb-8 font-light"
          style={{ color: "#8FA87A" }} // sedikit lebih terang buat teks deskripsi
        >
          The page{" "}
          <code
            className="bg-gray-100 px-1 rounded"
            style={{ color: "#6D8A59" }}
          >
            {location.pathname}
          </code>{" "}
          doesn’t exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 rounded-md font-medium transition-colors duration-300"
          style={{
            border: "2px solid #6D8A59",
            color: "#6D8A59",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = "#5B7649";
            e.currentTarget.style.color = "white";
            e.currentTarget.style.borderColor = "#5B7649";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#6D8A59";
            e.currentTarget.style.borderColor = "#6D8A59";
          }}
        >
          Go back home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
