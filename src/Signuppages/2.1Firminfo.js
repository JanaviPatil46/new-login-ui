import React, { forwardRef, useImperativeHandle, useState, useMemo, useEffect } from 'react';

import { Alert, Box, InputLabel, TextField, Typography } from '@mui/material';

import Select from 'react-select';
import { Country, State } from 'country-state-city';


const FirmInfo = forwardRef(({ formData, setFormData, setLoading }, ref) => {
  const [firmname, setFirmname] = useState(formData.firmname)
  const [selectedCountry, setSelectedCountry] = useState(formData.selectedCountry);
  const [selectedState, setSelectedState] = useState(formData.selectedState);

  const [country, setcountry] = useState(formData.country);
  const [state, setstate] = useState(formData.state);


  const [stateerror, setstateerror] = useState(false)
  const [allerror, setallerror] = useState(false)



  const countryOptions = useMemo(
    () => Country.getAllCountries().map((country) => ({
      value: country.isoCode,
      label: country.name,
    })),
    []
  );

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setcountry(country.label)
    setSelectedState(null);
  };

  const stateOptions = useMemo(() => {
    if (!selectedCountry) return [];
    return State.getStatesOfCountry(selectedCountry.value).map((state) => ({
        value: state.isoCode,
        label: state.name,
    }));
}, [selectedCountry]);

const handleStateChange = (state) => {
    setSelectedState(state);
    setstate(state.label)
};




  const countrystyles = {
    control: (provided) => ({
      ...provided,
      height: '56px', width: '50%',

      borderRadius: '10px',
      '& .MuiOutlinedInput-root': {
        borderRadius: '10px',
        height: '60px',
        '& fieldset': {
          borderRadius: '10px',
        },
        '&:hover': {
          borderColor: 'blue',
        }
      },

    }),
    menu: (provided) => ({
      ...provided,

      borderRadius: '10px',
    }),
  };
  const statestyles = {
    control: (provided) => ({
      ...provided,
      height: '56px', width: '50%',
      borderRadius: (allerror || stateerror) ? '10px 10px 0 0 ' : '10px',
      border: (allerror || stateerror) ? '1.5px solid red' : '1px solid grey'
      ,
      '&:hover': {
        borderColor: (allerror || stateerror) ? '' : 'blue',
      },
    }),
    menu: (provided) => ({
      ...provided,
      margin: '0',


      borderRadius: '10px',
    }),
  };

  return (
    <Box>
      <Typography sx={{ fontSize: '55px', fontWeight: '700' }} variant='h3'>Firm Information</Typography>
      <InputLabel sx={{ mt: '3%' }} htmlFor="firimname">Firm name</InputLabel>
      <TextField
        id='firimname'
        placeholder="firmname"
        name='email'
        value={firmname}
        onChange={(e) => {
          setFirmname(e.target.value);
        }}

        sx={{
          width: '50%', bgcolor: 'white', border: '1px solid grey',
          borderRadius: '10px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '10px',
            height: '60px',
            '& fieldset': {
              borderRadius: '10px',
            },
          },

        }}

      />


      <InputLabel sx={{ mt: '2%' }} htmlFor="country">Country</InputLabel>
      <InputLabel sx={{ fontSize: '14px' }} htmlFor="country">Please make sure the country you've chosen is correct. You cannot change it later.</InputLabel>
      <Select id='country'

        className='locations country'
        styles={countrystyles}
        options={countryOptions}
        value={selectedCountry}
        onChange={handleCountryChange}
        placeholder="Select a country"
      />

      <InputLabel sx={{ mt: '2%' }} htmlFor="state">State</InputLabel>
      <Select id='state'

        className='locations state'
        styles={statestyles}
        options={stateOptions}
        value={selectedState}
        onChange={handleStateChange}
        placeholder="Select a state"
        isDisabled={!selectedCountry}
      />



    </Box>
  )
})



export default FirmInfo






