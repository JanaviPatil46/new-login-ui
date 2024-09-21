import React, { useState } from 'react';
import './login.css'
import logo from '../Images/logo.jpg'
import { Alert, Box, Typography, Button, Checkbox, FormControlLabel, IconButton, InputAdornment, InputLabel, Select, MenuItem, OutlinedInput, TextField, } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom'
const Login = () => {
    const [timeout, setTimeout] = useState('')
    const [psswrd, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const [checkbox, setCheckbox] = useState(false)

    const [allerror, setallerror] = useState(false)
    const [emailError, setEmailError] = useState(false);
    const [passworderror, setPasswordError] = useState(false);
    const [sessionerror, setSessionerror] = useState(false);
    const [checkboxerror, setCheckboxerror] = useState(false)

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    //Agree to terms and conditons
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleSubmit = async (e) => {
        e.preventDefault()



    }
    return (
        <Grid
            container
            sx={{
                height: '100vh',

            }}
        >
            <Grid
                item
                xs={12}
                md={6}
                sx={{ width: '50%' }}

            >
                <Box className='logininfo' >
                    <img src={logo} className='LOGO' width='auto' height='70px' alt='logo' />
                    <h1 className='wbtext'  >Welcome Back</h1>
                    <Typography variant='p' sx={{ color: "white", mx: 8, textAlign: 'center', fontSize: '20px', fontWeight: '500' }}>
                        "Welcome to 'SNP Tax & Financials', where tax management meets simplicity. Our advanced software streamlines tax processes for individuals, businesses, and professionals, ensuring accuracy and efficiency. Experience a new era of financial ease with SNP Tax & Financials."</Typography>
                    <Typography variant='p' className='fontchange' >
                        Please Login to access your account
                    </Typography>

                </Box>
            </Grid>
            <Grid
                item
                xs={12}
                md={6}
                sx={{ width: '50%' }}
            >
                <Box className='logininput'  >
                    <form onSubmit={handleSubmit} >
                        <Box className='loginalign'>
                            <Typography variant='h1' sx={{
                                color: "black", fontSize: "35px",
                                fontWeight: '700', mb: '50px',
                               
                            }}>Login Account</Typography>
                            <InputLabel htmlFor="outlined-required">Email</InputLabel>
                            <TextField
                                placeholder="Email" error={(emailError || allerror)}
                                name='email'
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                size='small'
                                margin='normal'
                                sx={{
                                    width: '100%', bgcolor: 'white', marginBottom: '15px',
                                    borderRadius: (emailError || allerror) ? '10px 10px 0 0' : '10px', '& .MuiOutlinedInput-root': {
                                        borderRadius: (emailError || allerror) ? '10px 10px 0 0' : '10px',
                                        '& fieldset': {
                                            borderRadius: (emailError || allerror) ? '10px 10px 0 0' : '10px',
                                        },
                                    },
                                }}
                                id="outlined-required"
                            />
                            {(emailError || allerror) && <Alert sx={{
                                width: '96%',
                                p: '0', // Adjust padding to control the size
                                pl: '4%', height: '23px',
                                borderRadius: '10px',
                                borderTopLeftRadius: '0',
                                borderTopRightRadius: '0',
                                fontSize: '13px',
                                display: 'flex',
                                alignItems: 'center', // Center content vertically
                                '& .MuiAlert-icon': {
                                    fontSize: '16px', // Adjust the size of the icon
                                    mr: '8px', // Add margin to the right of the icon
                                },
                            }} variant="filled" severity="error" >
                                Incorrect Email
                            </Alert>}

                            <br />

                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput value={psswrd} error={(passworderror || allerror)}
                                onChange={(e) => setPassword(e.target.value)}
                                size='small'

                                sx={{
                                    marginBottom: '15px', marginTop: '12px', width: '100%', bgcolor: 'white', borderRadius: (passworderror || allerror) ? '10px 10px 0 0' : '10px', '& .MuiOutlinedInput-root': {
                                        borderRadius: (passworderror || allerror) ? '10px 10px 0 0' : '10px',
                                        '& fieldset': {
                                            borderRadius: (passworderror || allerror) ? '10px 10px 0 0' : '10px',
                                        },
                                    },
                                }}
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }

                                placeholder="Password"
                            /> {(passworderror || allerror) && <Alert sx={{
                                width: '96%',
                                p: '0', // Adjust padding to control the size
                                pl: '4%',
                                height: '23px',
                                borderRadius: '10px',
                                borderTopLeftRadius: '0',
                                borderTopRightRadius: '0',
                                fontSize: '13px',
                                display: 'flex',
                                alignItems: 'center', // Center content vertically
                                '& .MuiAlert-icon': {
                                    fontSize: '16px', // Adjust the size of the icon
                                    mr: '8px', // Add margin to the right of the icon
                                },
                            }} variant="filled" severity="error">
                                Incorrect Password
                            </Alert>}
                            <Box mb={2}>
                                <Link to='/passwordreset' style={{ marginTop: '25px', marginBottom: '25px' }} className='route-links'>Forgot Password</Link>
                            </Box>


                            <InputLabel id="time-select-label">Stay Signed In For</InputLabel>
                            <Select
                                size='small'

                                sx={{
                                    marginTop: '12px', width: '100%', bgcolor: 'white', borderRadius: (sessionerror || allerror) ? '10px 10px 0 0' : '10px', '& .MuiOutlinedInput-root': {
                                        borderRadius: (sessionerror || allerror) ? '10px 10px 0 0' : '10px',
                                        '& fieldset': {
                                            borderRadius: (sessionerror || allerror) ? '10px 10px 0 0' : '10px',
                                        },
                                    },
                                }}
                                error={(sessionerror || allerror)}
                                labelId="time-select-label"
                                id="time-select"
                                value={timeout}

                                onChange={(e) => {
                                    setTimeout(e.target.value);
                                }}
                            >
                                <MenuItem value={0} disabled>Select Time Interval</MenuItem>
                                <MenuItem value={5}>5 Seconds</MenuItem>
                                <MenuItem value={'1m'}>1 Minute</MenuItem>
                                <MenuItem value={'8h'}>8 Hours</MenuItem>
                                <MenuItem value={'10d'}>10 Days</MenuItem>
                                <MenuItem value={'30d'}>30 Days</MenuItem>
                            </Select>
                            {(sessionerror || allerror) && <Alert sx={{
                                width: '96%',
                                p: '0', // Adjust padding to control the size
                                pl: '4%', height: '23px',
                                borderRadius: '10px',
                                borderTopLeftRadius: '0',
                                borderTopRightRadius: '0',
                                fontSize: '13px',
                                display: 'flex',
                                alignItems: 'center', // Center content vertically
                                '& .MuiAlert-icon': {
                                    fontSize: '16px', // Adjust the size of the icon
                                    mr: '8px', // Add margin to the right of the icon
                                },
                            }} variant="filled" severity="error" >
                                Select Timeout
                            </Alert>}
                            <FormControlLabel sx={{ marginTop: '12px' }} value={checkbox} control={<Checkbox checked={checkbox} onChange={(e) => { setCheckbox(e.target.checked) }} sx={{ color: (checkboxerror || allerror) ? 'red' : '' }} />} label={
                                <span className='termncond'>
                                    "Agree to
                                    <Link to="/termsncond" className='route-links'>
                                        Terms and Conditions"
                                    </Link>
                                </span>
                            } />
                            {(checkboxerror || allerror) && <Alert sx={{
                                width: '96%',
                                p: '0', // Adjust padding to control the size
                                pl: '4%', height: '23px',
                                borderRadius: '10px',

                                fontSize: '13px',
                                display: 'flex',
                                alignItems: 'center', // Center content vertically
                                '& .MuiAlert-icon': {
                                    fontSize: '16px', // Adjust the size of the icon
                                    mr: '8px', // Add margin to the right of the icon
                                },
                            }} variant="filled" severity="error" >
                                Check the Agree to terms and conditons
                            </Alert>}
                            <Box>
                            <Button type='submit' variant="contained" fullWidth sx={{
                                borderColor: 'primary.main',
                                borderWidth: '2px', borderStyle: 'solid', fontSize: '15px', fontWeight: '600', borderRadius: '100px', mt: '15px',
                                ':hover': {
                                    backgroundColor: 'transparent',
                                    borderColor: 'primary.main',
                                    color: 'primary.main',
                                    boxShadow: 'none',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                },
                            }}>Login</Button>
                            </Box>
                            
                            <p className='donthaveacc'>Don't have an account?<Link to='/signup' className='route-links'>Sign Up</Link></p>
                        </Box>
                    </form>

                </Box>
            </Grid>
        </Grid>
    );
};

export default Login;
