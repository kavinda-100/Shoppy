// Desc: 404 page
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

const Missing = () => {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-montserrat text-slate-800 font-semibold my-4">
        Page Not Found!
      </h1>
      <Tooltip title="go to home page" arrow>
        <Link
          to={`/`}
          className="text-xl font-montserrat text-slate-gray font-semibold my-6 hover:underline hover:bg-slate-600 hover:p-4 hover:text-white-primary hover:rounded-lg"
        >
          go to home page
        </Link>
      </Tooltip>
    </section>
  );
};

export default Missing;
