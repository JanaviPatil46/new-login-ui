import React, { forwardRef,  useState } from 'react';
import {  Box, Button, Typography } from '@mui/material';

const roles = [
  'Owner or Partner',
  'Bookkeeper or Accountant',
  'Operations / Office Manager',
  'Admin',
  'Assistant',
  'Other',
];

const YourRoleInFirm =forwardRef(({ formData, })=> {
  const [selectedRole, setSelectedRole] = useState(formData.selectedRole);
  
  
  const [roleinfirmerror, setroleinfirmerror] = useState(false)


  const handleSelectRole = (role) => {
    setSelectedRole(role);
  }

  

  return (
    <Box >
      <Typography variant="h3" sx={{fontSize:'50px' , fontWeight:'700'}} gutterBottom>
        Your role in the firm
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
        {roles.map((role) => (
          <Button
            key={role}
            variant={selectedRole === role ? 'contained' : 'outlined'}
            onClick={() => handleSelectRole(role)}
            sx={{ width: 'auto',fontSize:'15px' , p:'15px 50px' , textTransform: 'none', borderColor:roleinfirmerror?'red': '', }}
          >
            {role}
          </Button>
        ))}
      </Box>
    
      
    </Box>
  )
})

export default YourRoleInFirm  