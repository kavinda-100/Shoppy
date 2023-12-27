import { Link, useNavigate } from "react-router-dom";
import { helpArticles } from "../Constens"
import ArticleCard from "../Components/ArticleCard";
// MUI Imports
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// subCard component
const SubCard = ({ title, description }) => {
  return (
    <div className="flex gap-3 justify-between my-3 md:my-[15px] lg:my-6 xl:my-8">
      <span className="flex flex-col">
        <h1 className="text-xl md:text-xl xl:text-2xl font-semibold font-montserrat text-black-secondary text-pretty">
          {title}
        </h1>
        <p className="text-lg md:text-lg xl:text-xl my-3 font-semibold font-montserrat text-slate-gray text-pretty">
          {description}
        </p>
      </span>
      <ArrowRightAltIcon
        className="text-black-primary"
        sx={{
          fontSize: "3rem",
          cursor: "pointer",
          ":hover": {
            color: "rgb(109, 109, 109, 0.5)",
          },
        }}
      />
    </div>
  );
};

const HelpAndContact = () => {
  // declare navigate
  const navigate = useNavigate();

  // handle sign in button
  const handleSignIn = () => {
    navigate("/sign-in");
  };

  return (
    <main className="container my-3">
      {/* hading */}
      <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold font-montserrat leading-normal text-black-secondary text-center">
        How can we help you today?
      </h1>
      {/* email input and button */}
      <div className="flex flex-col lg:flex-row lg:border lg:border-gray-300 lg:rounded-md max-w-6xl mx-auto my-3 p-3 lg:p-0">
        <input
          type="text"
          placeholder="Email Us"
          className="w-full border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent outline-none lg:rounded-tr-none lg:rounded-br-none"
        />
        <button className="bg-black-primary hover:bg-black-secondary text-white-primary rounded-md p-4 w-1/3 lg:w-1/4 font-semibold cursor-pointer mt-3 lg:mt-0 lg:rounded-tl-none lg:rounded-bl-none">
          Send
        </button>
      </div>

      {/* card section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 my-4 md:my-5 xl:my-7">
        <section className="bg-gray-300 p-5 2xl:p-7 shadow-sm lg:border-r-2 lg:border-slate-300 place-content-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center text-black-primary font-montserrat font-bold leading-normal my-6">
            Get personalized help and see your recent orders
          </h1>
          <button
            onClick={handleSignIn}
            className="bg-black-primary hover:bg-black-secondary text-white-primary rounded-md p-4 w-full font-semibold cursor-pointer text-center my-3"
          >
            Sign In
          </button>
          <div className="flex flex-wrap gap-3 my-3">
            <h1 className="text-lg md:text-xl font-semibold font-montserrat">
              Don't have an account?
            </h1>
            <Link
              className="text-md md:text-lg font-semibold font-montserrat text-black-primary hover:text-black-secondary hover:underline"
              to="/sign-up"
            >
              Sign Up Now
            </Link>
          </div>
        </section>
        <section className=" bg-white-primary p-5 2xl:p-7  shadow-sm lg:border-r-2 lg:border-slate-300">
          <SubCard
            title="Buying as a guest"
            description="popular article for guest users"
          />
          <SubCard
            title="get help with an order that hasn't arrived"
            description="popular article"
          />
          <SubCard
            title="Gift Cards"
            description="View balance or redeem a card"
          />
        </section>
        <section className=" bg-white-primary p-5 2xl:p-7  shadow-sm">
          <SubCard
            title="get help if you bought as a guest"
            description="popular article"
          />
          <SubCard
            title="create an account"
            description="popular article"
          />
          <SubCard
            title="payment options"
            description="popular article"
          />
        </section>
      </section>

      {/* article section */}
      <section className="w-full h-auto my-4 md:my-5 lg:my-7 xl:my-9 bg-white-secondary">
        <h1 className="text-lg lg:text-xl xl:text-2xl font-bold font-montserrat text-black-secondary text-center">Browse Help Articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-9 p-3 xl:p-5">
        {
          helpArticles.map((article, index) => (
            <ArticleCard key={index} text={article.name} icon={article.icon} />
          ))
        }

        </div>
      </section>
    </main>
  );
};

export default HelpAndContact;
