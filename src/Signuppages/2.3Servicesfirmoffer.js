import React, { forwardRef,  useState } from 'react';
import {  Box, Button, Checkbox, FormControlLabel, Typography } from '@mui/material';


const services = [
  'Tax preparation',
  'Tax planning',
  'Advisory',
  'Resolution',
  'Payroll',
  'Accounting',
  'Audit',
  'Law firm',
  'Bookkeeping',
  'Other',
];

const ServicesFirmOffer = forwardRef(({ formData, }) => {
  const [selectedServices, setSelectedServices] = useState(formData.firmservices || []);
  const [selectAll, setSelectAll] = useState(false);



  const [firmserviceserror, setfirmserviceserror] = useState(false)


  const handleSelectService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    )
  }

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedServices([]);
    } else {
      setSelectedServices(services);
    }
    setSelectAll(!selectAll);
  }
  




  
  return (
    <Box >
      <Typography variant="h3" sx={{ fontSize: '50px', fontWeight: '700' }} gutterBottom>
        Services your firm offers
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2, mt: '3%' }}>
        {services.map((service) => (
          <Button
            key={service}
            variant={selectedServices.includes(service) ? 'contained' : 'outlined'}
            onClick={() => handleSelectService(service)}
            sx={{ width: 'auto', fontSize: '15px', p: '15px 50px', textTransform: 'none', borderColor: firmserviceserror ? 'red' : '', }}>
            {service}
          </Button>
        ))}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <FormControlLabel
          control={
            <Checkbox checked={selectAll} onChange={handleSelectAll} />
          }
          label="Select all"
        />
      </Box>
     
    </Box>
  )
})

export default ServicesFirmOffer 