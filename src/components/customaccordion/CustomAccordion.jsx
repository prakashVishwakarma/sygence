import React from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CustomAccordion = ({faq}) => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography className='font-extrabold	' component="span">{faq.Q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{faq.A}</Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default CustomAccordion
