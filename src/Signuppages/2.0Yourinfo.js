import { Alert, Box, InputLabel, TextField, Typography } from '@mui/material'
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';



const CustomPhoneInput = ({ value, onChange, error }) => {


  return (
    <PhoneInput

      country={'in'}
      value={value}
      onChange={onChange}
      containerStyle={{
        width: '50%',
        borderRadius: error ? '10px 10px 0 0 ' : '10px',
        height: '60px',
        background: 'white',
        border: error ? '1px solid red' : '1px solid grey',
        display: 'flex',
        alignItems: 'center',
      }}
      inputStyle={{
        width: '100%',
        border: 'none', height: '60px',
        outline: 'none',
        fontSize: '16px',
        borderRadius: '10px',
        color: '#000',
        padding: '8px 0',
        marginLeft: '60px',
      }}
      buttonStyle={{
        border: 'none', height: '60px',
        background: 'white',
        padding: '0',
        marginLeft: '8px',

      }}
      dropdownStyle={{
        margin: '0',
        width: '300px',
      }}
      specialLabel=''
    />
  );
};
const YourInfo = forwardRef(({ formData, }) => {

  const [phoneno, setPhoneno] = useState(formData.phoneno)
  const [firstname, setfirstname] = useState(formData.firstname)
  const [lastname, setlastname] = useState(formData.lastname)

 

  const handlePhoneChange = (value) => {
    setPhoneno(value)
  }






  return (
    <Box>
      <Typography sx={{ fontSize: '55px', fontWeight: '700' }} variant='h3'>Your information</Typography>
      <Box sx={{ display: 'flex', mt: '3.5%', mb: '2%', width: '50%' }}>
        <Box sx={{ width: '54%' }}>
          <InputLabel htmlFor="outlined-firname">First name</InputLabel>
          <TextField
            id='outlined-firname'
            placeholder="fisrt name" //error={(eerror)}
            name='email'
            
            value={firstname}
            onChange={(e) => {
              setfirstname(e.target.value);
            }}

            //  (eerror) ? '10px 10px 0 0' :
            sx={{
              width: '100%', bgcolor: 'white',
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

        </Box>


        <Box sx={{ ml: '2%', width: '54%' }}>
          <InputLabel htmlFor="outlined-lastname">Last Name</InputLabel>
          <TextField
            id="outlined-lastname"
            placeholder="last name" // error={(eerror)}
            name='email'
         
            value={lastname}
            onChange={(e) => {
              setlastname(e.target.value);
            }}
            sx={{
              width: '100%', bgcolor: 'white',
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

        </Box></Box>
      <InputLabel htmlFor="outlined-phone">Phone Number</InputLabel>
      <CustomPhoneInput
        id="outlined-phone"
        value={phoneno}

        onChange={handlePhoneChange}
        
      />
      


    </Box>)
})

export default YourInfo