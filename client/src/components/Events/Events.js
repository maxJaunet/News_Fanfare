import { Button, Paper } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@mui/material/MobileStepper';
import { autoPlay } from 'react-swipeable-views-utils';
import { useState } from "react";

const Events = ({events}) => {

  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = events.length;
    
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };

  return (
      <div>
      <AutoPlaySwipeableViews
        axis= 'x'
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={8500}
        slideStyle={{backgroundColor: props.bg}}
      >
        {events.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div>
                <Box
                  component="img"
                  sx={{
                    height: 200,
                    display: 'block',
                    maxWidth: 400,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imagePath ? step.imagePath : ""}
                  alt={step.imageAlt ? step.imageAlt : ""}
                />
              </div>
            ) : null}
            <div style={{backgroundColor: 'rgba(235, 235, 235, 0.5)', marginTop: 8, padding: 5 }}>
                  <h3 style={{paddingTop: 0}}>{step.name}</h3>
                  <p>{step.description}</p>
                  <p>{step.date}</p>
                  <Button sx={{paddingLeft: 0}}>Voir plus</Button>
            </div>
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Suiv
              <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              <KeyboardArrowLeft />
            Prec
          </Button>
        }
      />
    </div>
    )
}

export default Events;