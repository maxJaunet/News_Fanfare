import { Container, Grid } from '@mui/material';
import React from 'react';

const Contact = () => {
  return (
    <Container maxWidth="lg">
    <Grid container spacing={2} columns={16} justifyContent="center">
      <Grid item xs={4}>
        <h2>Contact</h2>
      </Grid>
      <Grid item xs={4}>
        <h2>Contact</h2>
      </Grid>
      <Grid item xs={4}>
        <h2>Contact</h2>
      </Grid>
      <Grid item xs={4}>
        <h2>Contact</h2>
      </Grid>
    </Grid>
    </Container>
    
  )
}

export default Contact;