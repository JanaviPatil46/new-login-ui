import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import {  TextField, Typography, InputAdornment, IconButton, Box, Button, FormHelperText, Alert } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';




const SetPassword=forwardRef(({ formData, setFormData ,setLoading}, ref)=> {
  
  const [password, setPassword] = useState(parseInt(formData.password) || '');
  const [confirmPassword, setConfirmPassword] = useState(parseInt(formData.confirmPassword) || '');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [passworderror, setpassworderror] = useState(false)
  const [confirmpassworderror, setconfirmpassworderror] = useState(false)
const[allerror,setallerror]=useState(false)

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert('Passwords match');
    // Add your form submission logic here
  };

  const isPasswordValid = (password) => {
    const hasNumber = /\d/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasMinLength = password.length >= 8;
    return { hasNumber, hasUppercase ,hasLowercase ,hasSymbol, hasMinLength };
  };

  const passwordValidation = isPasswordValid(password);


  
  
  return (
    <Box sx={{width:'50%'}}>
      <Typography variant="h3" sx={{ fontSize: '50px', fontWeight: '700' }} gutterBottom>
        Set password
      </Typography>

      <form onSubmit={handleSubmit}>
        
        <TextField
          fullWidth
          sx={{bgcolor: 'white',
            borderRadius: '10px', '& .MuiOutlinedInput-root': {
                borderRadius: '10px',height:'60px',
                '& fieldset': {
                  borderRadius:  '10px',
                },
              },}}
          
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
         
        />
       
                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
          <FormHelperText sx={{display:'flex'}}  error={!passwordValidation.hasNumber} >
            <CheckCircleIcon color={passwordValidation.hasNumber ? 'success' : 'error'} fontSize="small" /> <p style={{marginTop:'1px' ,marginLeft:'3px'}}>a number</p>
          </FormHelperText>
          <FormHelperText sx={{display:'flex'}} error={!passwordValidation.hasUppercase} >
            <CheckCircleIcon color={passwordValidation.hasUppercase ? 'success' : 'error'} fontSize="small" /> <p style={{marginTop:'1px' ,marginLeft:'3px'}}>a uppercase letter</p>
          </FormHelperText>
          <FormHelperText sx={{display:'flex'}} error={!passwordValidation.hasLowercase}>
            <CheckCircleIcon color={passwordValidation.hasLowercase ? 'success' : 'error'} fontSize="small" /><p style={{marginTop:'1px' ,marginLeft:'3px'}}>a lowercase letter</p> 
          </FormHelperText>
          <FormHelperText sx={{display:'flex'}} error={!passwordValidation.hasSymbol}>
            <CheckCircleIcon color={passwordValidation.hasSymbol ? 'success' : 'error'} fontSize="small" /><p style={{marginTop:'1px' ,marginLeft:'3px'}}>a symbol</p> 
          </FormHelperText>
          <FormHelperText sx={{display:'flex'}} error={!passwordValidation.hasMinLength}>
            <CheckCircleIcon color={passwordValidation.hasMinLength ? 'success' : 'error'} fontSize="small" /><p style={{marginTop:'1px' ,marginLeft:'3px'}}>at least 8 characters</p> 
          </FormHelperText>
        </Box>

        <TextField
          fullWidth
          variant="outlined"
          sx={{bgcolor: 'white',
            borderRadius:  '10px', '& .MuiOutlinedInput-root': {
                borderRadius:   '10px',height:'60px',
                '& fieldset': {
                  borderRadius:  '10px',
                },
              },}}
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle confirm password visibility"
                  onClick={handleClickShowConfirmPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
   
         
         
        />
        

        
      </form>
      </Box>
  )
})

export default SetPassword