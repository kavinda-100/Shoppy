// MUI Imports
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { accordionData } from "../Constens";

const AccordionCard = () => {
  return (
    <div>
      {accordionData.map((item, index) => {
        return (
          <Accordion key={index}
          sx={{
            marginLeft: {
              xs: "1rem",
              sm: "0",
            },
            marginRight: {
              xs: "1rem",
              sm: "0",
            },
          }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <p className="text-md md:text-lg font-montserrat font-bold text-black-secondary capitalize">
              {item.question}
              </p>
            </AccordionSummary>
            <AccordionDetails>
            <p className="text-md md:text-lg font-montserrat font-semibold text-black-primary capitalize leading-normal">
            {item.answer}
            </p>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default AccordionCard;
