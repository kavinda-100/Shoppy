import AccordionCard from "../Components/AccordionCard";
import { aboutFirstUL, aboutSecondUL } from "../Constens";

// MUI Imports
import CircleIcon from "@mui/icons-material/Circle";

const About = () => {
  return (
    <section className="container h-auto">
      <h1 className="text-center text-2xl md:text-3xl text-slate-600 font-montserrat leading-normal font-bold">
        About Shoppy
      </h1>
      <div className="m-5 md:m-7">
        <h2 className="text-xl md:text-3xl font-montserrat font-bold text-slate-gray leading-normal">
          <span className="text-xl text-black-secondary">Shoppy: </span>Where
          Your Shopping Journey Begins
        </h2>

        <p className="text-md md:text-xl text-black-primary font-medium font-montserrat leading-normal my-3">
          Shoppy isn't just an online store; it's a shopping revolution. We're
          passionate about making e-commerce accessible, enjoyable, and
          empowering for everyone in Sri Lanka and beyond.
        </p>

        <p className="text-md md:text-xl text-black-secondary font-semibold font-montserrat leading-normal my-3">
          Here's what sets Shoppy apart:
        </p>
        <ul className="px-3">
          {aboutFirstUL.map((item, index) => (
            <li
              className="text-md md:text-xl text-black-primary font-medium font-montserrat leading-normal my-3"
              key={index}
            >
              <CircleIcon
                sx={{
                  color: "black",
                  fontSize: 8,
                  marginRight: 1,
                }}
              />
              {item}
            </li>
          ))}
        </ul>

        <p className="text-md md:text-xl text-black-secondary font-semibold font-montserrat leading-normal mb-3 mt-4">
          Shoppy is more than just a store; it's a destination for:
        </p>
        <ul className="px-3">
          {aboutSecondUL.map((item, index) => (
            <li
              className="text-md md:text-xl text-black-primary font-medium font-montserrat leading-normal my-3"
              key={index}
            >
              <CircleIcon
                sx={{
                  color: "black",
                  fontSize: 8,
                  marginRight: 1,
                }}
              />
              {item}
            </li>
          ))}
        </ul>

        <p className="text-md md:text-xl text-black-primary font-medium font-montserrat leading-normal my-5">
          At Shoppy, we believe that shopping should be an adventure, not a
          chore. We're here to make your journey as smooth and rewarding as
          possible, every step of the way.
        </p>

        <p className="text-md md:text-xl text-black-primary font-medium font-montserrat leading-normal my-5">
          So, are you ready to experience the Shoppy difference? Browse our
          curated collections, discover hidden treasures, and join our community
          of passionate shoppers.
        </p>

        <h1 className="text-2xl md:text-3xl text-slate-gray font-bold font-montserrat md:text-center">
          Welcome to Shoppy!
        </h1>
      </div>

      <section className="my-5 md:my-6 max-w-5xl mx-auto flex justify-center items-center">
        <div>
          <h1 className="text-2xl md:text-3xl text-slate-700 font-bold font-montserrat text-center my-4">
            FAQ
          </h1>
          <AccordionCard />
        </div>
      </section>
    </section>
  );
};

export default About;
