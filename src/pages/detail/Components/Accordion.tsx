import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

interface AccordinProps {
  description: string;
  features: string[];
}

export default function AccordionExpandIcon(props: AccordinProps) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faArrowAltCircleUp} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{props.description}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faArrowAltCircleUp} />}
          //   expandIcon={<p>abajo</p>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Features</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {props.features.map((feature) => {
            return <Typography key={feature}>{feature}</Typography>;
          })}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faArrowAltCircleUp} />}
          //   expandIcon={<p>abajo</p>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Cambios O Devoluciones</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Items can be returned or exchanged within 30 days if unworn and with
            tags. Customers cover return shipping unless items are defective.
            Refunds process within 7-10 days. Final sale items are
            non-returnable. Contact customer service for assistance.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
