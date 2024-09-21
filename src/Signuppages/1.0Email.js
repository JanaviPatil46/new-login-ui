// import React from 'react'

// const Email = () => {
//   return (
//     <div>1.0Email</div>
//   )
// }

// export default Email


import { Alert, Box, Checkbox,  FormControlLabel, InputLabel, TextField, Typography } from '@mui/material'
import React, { forwardRef,  useState } from 'react'

import { Link } from 'react-router-dom'




const Email = forwardRef(({ formData,  }) => {
  const [email, setEmail] = useState(formData.email)
  const [checkbox, setCheckbox] = useState(formData.checkbox)




  return (
    <Box className='emailbox'>
      <Typography textAlign={'center'} sx={{ fontSize: '45px', fontWeight: '700' }} variant='h3'>Sign Up</Typography>
      <Typography sx={{ textAlign: 'center', fontSize: '17px' }} variant='h6'>Sign Up your firm and start upgrading your workflow.</Typography>

      <Box sx={{mt: '40px'}}>
        <InputLabel>Email</InputLabel>
        <TextField
          placeholder='enter your email'
          size='small'
         
          sx={{
            bgcolor: 'white', m: 0, mt:2,
            borderRadius: '10px', 
            '& .MuiOutlinedInput-root': {
              borderRadius: '10px',
              height: '60px',
              '& fieldset': {
                borderRadius: '10px',
              },
            },
            
          }}
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
       

        />
      </Box>


      
      <FormControlLabel sx={{ marginTop: '12px' }} value={checkbox} control={<Checkbox checked={checkbox} onChange={(e) => { setCheckbox(e.target.checked) }}  />} label={
        <span className='iageree'>
          I Agree to
          <Link to="/termsncond" className='route-links'>
            Terms and Conditions
          </Link>
        </span>
      } />
     

    </Box>
  )
})
export default Email