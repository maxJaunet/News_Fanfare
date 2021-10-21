import { Grid } from '@mui/material';
import React from 'react';

const Footer = (props) => {
  return (
    <div className="footer" style={props.theme}>
    <Grid container justifyContent="space-between" alignItems="stretch">
      <Grid item xs={6} sm={4}>
        <h2 fontFamily="inherit" variant="h4">New's Fanfare</h2>
      </Grid>
      <Grid item xs={2} align="end" className="hamburger">
      
      
      </Grid>
    </Grid>
    <div className="wrapper">
      
    </div>
  </div>
  )
}

export default Footer;