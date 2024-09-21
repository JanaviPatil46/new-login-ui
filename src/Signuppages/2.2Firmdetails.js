import { Alert, Box, Button, Input, InputLabel, Slider, Typography } from '@mui/material';
import React, { forwardRef, useState } from 'react';


const sources = [
  'Google search',
  'Capterra/Getapp/G2',
  'From a friend',
  'Offline event',
  'Social media',
  'TaxDome Consultant/Partner',
  'Other',
];

const FirmDetails = forwardRef(({ formData, }) => {
 
  const [value, setValue] = useState(formData.value || 0);
  const [selectedSource, setSelectedSource] = useState(formData.selectedSource || '');

 

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value === '' ? '' : Number(event.target.value);
    if (newValue >= 0 && newValue <= 200) {
      setValue(newValue);
    }
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 200) {
      setValue(200);
    }
  };

  const handleSelectSource = (source) => {
    setSelectedSource(source);
  };



 

  return (
    <>
      <Typography sx={{ fontSize: '55px', fontWeight: '700' }} variant='h3'>Firm details</Typography>
      <InputLabel sx={{ mt: '3%', mb: '1%', fontWeight: '600' }} htmlFor="firimname">Firm Size</InputLabel>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Input
          value={value}
          size="small"
          onChange={handleInputChange}
          onBlur={handleBlur}
          disableUnderline
          sx={{
            width: '100px',
            p: '10px 10px 10px 40px',
            textAlign: 'center',
            border:  '1px solid dodgerblue',
            mr: '10px',
            borderRadius: '4px',
            marginRight: '10px',
          }}
        />
        <Slider
          value={value}
          onChange={handleSliderChange}
          step={1}
          min={0}
          max={200}
          marks={[
            { value: 0, label: '0' },
            { value: 5, label: '5' },
            { value: 10, label: '10' },
            { value: 15, label: '15' },
            { value: 50, label: '50' },
            { value: 100, label: '100' },
            { value: 200, label: '200+' },
          ]}
          sx={{ width: '90%', ml: '20px',  }}
        />
      </Box>
      
      <InputLabel sx={{ mt: '2%', mb: '1%', fontWeight: '600' }} htmlFor="firimname">How did you hear about us?</InputLabel>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
        {sources.map((source) => (
          <Button
            key={source}
            variant={selectedSource === source ? 'contained' : 'outlined'}
            onClick={() => handleSelectSource(source)}
            sx={{
              width: 'auto',
              fontSize: '15px',
              p: '15px 50px',
              textTransform: 'none',
             
            }}
          >
            {source}
          </Button>
        ))}
      </Box>
   
    </>
  );
});

export default FirmDetails;
