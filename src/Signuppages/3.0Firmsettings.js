import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { TextField, Typography, Select, MenuItem, InputLabel, FormControl, Box, Button, Alert } from '@mui/material';


import firmsetimg from '../Images/firmsetting.png'
import { toast } from 'react-toastify';



const FirmSettings = forwardRef(({ formData, setFormData, setLoading }, ref) => {

  const [wurl, setUrl] = useState(formData.wurl);
  const [currency, setCurrency] = useState(formData.currency);
  const [language, setLanguage] = useState(formData.language);


  const [weburlerror, setweburlerror] = useState(false)
  const [currencyerror, setcurrencyerror] = useState(false)
  const [allerror, setallerror] = useState(false)
  const [inctaxcom, setinctaxcom] = useState('')
  const handleUrlChange = (event) => {
    const inputValue = event.target.value;
    setUrl(inputValue)
    if (inputValue.includes('.taxdome.com')) {
      setweburlerror(true)
      setinctaxcom('Do not include ".taxdome.com" in the URL.')
      toast.error('Do not include ".taxdome.com" in the URL.')
      return false
    } else {
      setweburlerror(false);
    }
  }





  return (<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
    <Box >
      <Typography variant="h3" sx={{ fontSize: '50px', fontWeight: '700' }} gutterBottom>
        Firm Settings
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '26px' }} gutterBottom>
        TaxDome <span style={{ color: 'blue' }}>Pro</span>
      </Typography>
      <Typography sx={{
        float: 'left',
        width: '330px'
      }} variant="subtitle1" gutterBottom>
        A powerful, integrated platform to manage teams, clients, projects.
      </Typography>
      <Typography sx={{ float: 'left', ml: '50px', fontWeight: '600', color: '#474747' }} variant="subtitle1" gutterBottom>
        From £40/mo per user
      </Typography>
      <br /><br />
      <Box sx={{ mt: 3 }}>
        <Typography sx={{ fontWeight: '600' }} variant="h6">Firm Settings</Typography>

        <InputLabel sx={{ mt: 1 }} >Choose web URL</InputLabel>
        <Typography variant="caption" display="block" gutterBottom>
          You will be able to set up a fully custom domain (without .taxdome.com) later
        </Typography>

        {/* weeeebbburrllllll */}
        <TextField
          fullWidth
          error={allerror || weburlerror}
          variant="outlined"
          placeholder="Weburl"
          value={wurl}
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
          onChange={handleUrlChange}
          InputProps={{
            endAdornment: <Typography variant="body2">.pms.com</Typography>,
          }}


        />




        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <FormControl sx={{ width: '30%', m: '0' }} fullWidth>
            <InputLabel sx={{ bgcolor: 'white' }}>Default currency</InputLabel>
            <Select sx={{
              height: '56px', borderRadius: '10px',

            }} value={currency} onChange={(e) => setCurrency(e.target.value)}  >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="GBP">GBP</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
            </Select>

            <Typography variant="caption" display="block">
              You cannot change it later
            </Typography>
          </FormControl>

          <FormControl sx={{ width: '65%', m: '0' }} fullWidth >
            <InputLabel sx={{ bgcolor: 'white' }}>Default language(English)</InputLabel>
            <Select sx={{ height: '56px', borderRadius: '10px' }} >
              <MenuItem value="English (British)">English (British)</MenuItem>
              <MenuItem value="English (US)">English (US)</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
              <MenuItem value="French">French</MenuItem>
            </Select>
          </FormControl>
        </Box>

      </Box></Box>
    <img style={{ marginRight: '80px' }} src={firmsetimg} alt='logoss' />

  </Box>
  )
})

export default FirmSettings  