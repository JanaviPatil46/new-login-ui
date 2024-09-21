
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, styled } from '@mui/system';
import { Typography,Button } from '@mui/material';
function OTP({ separator, length, value, onChange, width, height, fontSize }) {
  const inputRefs = useRef(new Array(length).fill(null));

  const focusInput = (targetIndex) => {
    const targetInput = inputRefs.current[targetIndex];
    targetInput.focus();
  };

  const selectInput = (targetIndex) => {
    const targetInput = inputRefs.current[targetIndex];
    targetInput.select();
  };

  const handleKeyDown = (event, currentIndex) => {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowDown':
      case ' ':
        event.preventDefault();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }
        break;
      case 'ArrowRight':
        event.preventDefault();
        if (currentIndex < length - 1) {
          focusInput(currentIndex + 1);
          selectInput(currentIndex + 1);
        }
        break;
      case 'Delete':
        event.preventDefault();
        onChange((prevOtp) => {
          const otp =
            prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
          return otp;
        });
        break;
      case 'Backspace':
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }
        onChange((prevOtp) => {
          const otp =
            prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
          return otp;
        });
        break;
      default:
        break;
    }
  };

  const handleChange = (event, currentIndex) => {
    const currentValue = event.target.value;

    // Allow only numbers
    if (!/^\d*$/.test(currentValue)) {
      return;
    }

    let indexToEnter = 0;

    while (indexToEnter <= currentIndex) {
      if (inputRefs.current[indexToEnter].value && indexToEnter < currentIndex) {
        indexToEnter += 1;
      } else {
        break;
      }
    }

    onChange((prev) => {
      const otpArray = prev.split('');
      const lastValue = currentValue[currentValue.length - 1];
      otpArray[indexToEnter] = lastValue;
      return otpArray.join('');
    });

    if (currentValue !== '' && currentIndex < length - 1) {
      focusInput(currentIndex + 1);
    }
  };

  // const handleChange = (event, currentIndex) => {
  //   const currentValue = event.target.value;
  //   let indexToEnter = 0;

  //   while (indexToEnter <= currentIndex) {
  //     if (inputRefs.current[indexToEnter].value && indexToEnter < currentIndex) {
  //       indexToEnter += 1;
  //     } else {
  //       break;
  //     }
  //   }
  //   onChange((prev) => {
  //     const otpArray = prev.split('');
  //     const lastValue = currentValue[currentValue.length - 1];
  //     otpArray[indexToEnter] = lastValue;
  //     return otpArray.join('');
  //   });
  //   if (currentValue !== '' && currentIndex < length - 1) {
  //     focusInput(currentIndex + 1);
  //   }
  // };

  const handleClick = (event, currentIndex) => {
    selectInput(currentIndex);
  };

  const handlePaste = (event, currentIndex) => {
    event.preventDefault();
    const clipboardData = event.clipboardData;

    if (clipboardData.types.includes('text/plain')) {
      let pastedText = clipboardData.getData('text/plain');
      pastedText = pastedText.substring(0, length).trim();
      let indexToEnter = 0;

      while (indexToEnter <= currentIndex) {
        if (inputRefs.current[indexToEnter].value && indexToEnter < currentIndex) {
          indexToEnter += 1;
        } else {
          break;
        }
      }

      const otpArray = value.split('');

      for (let i = indexToEnter; i < length; i += 1) {
        const lastValue = pastedText[i - indexToEnter] ?? ' ';
        otpArray[i] = lastValue;
      }

      onChange(otpArray.join(''));
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      {new Array(length).fill(null).map((_, index) => (
        <React.Fragment key={index}>
          <StyledInput
            aria-label={`Digit ${index + 1} of OTP`}
            ref={(ele) => {
              inputRefs.current[index] = ele;
            }}
            onKeyDown={(event) => handleKeyDown(event, index)}
            onChange={(event) => handleChange(event, index)}
            onClick={(event) => handleClick(event, index)}
            onPaste={(event) => handlePaste(event, index)}
            value={value[index] ?? ''}
            width={width}
            height={height}
            fontSize={fontSize}

          />
          {index === length - 1 ? null : separator}
        </React.Fragment>
      ))}
    </Box>
  );
}

OTP.propTypes = {
  length: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  separator: PropTypes.node,
  value: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
};

OTP.defaultProps = {
  width: '40px',
  height: '40px',
  fontSize: '16px',
};

export default function OTPInput() {
  const [otp, setOtp] = useState('');

  return (
    <>
      <Typography sx={{ fontSize: '50px', fontWeight: '700' }} variant='h3'>Confirmation Code</Typography>
      <Typography variant='h6' sx={{ fontSize: '15px', mb: 0, color: 'grey' }} >We sent an Confirmation code to your email:</Typography>
      <Typography variant='h6' sx={{ fontSize: '15px', mb: 2 }}>your email</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, ml: 1 }}>
        <OTP separator={<span>-</span>} value={otp} onChange={setOtp} length={5} width="100px" height="150px" fontSize="35px" />
        <Typography variant='h6'  sx={{ fontSize:'15px', mb:2 , mt:2 , color:'grey'}} >Didnt receive it? <Button  sx={{ ":hover":{ bgcolor:'transparent'}}}  >Resend Code</Button></Typography>
      </Box>
    </>

  );
}

const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const StyledInput = styled('input')(
  ({ theme, width, height, fontSize }) => `
  width: ${width};
  height: ${height};
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: ${fontSize};
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 0px;
  border-radius: 8px;
  text-align: center;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
    };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

