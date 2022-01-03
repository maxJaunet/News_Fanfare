import React from 'react';
import './styles.css';
import { Container, Grid, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Header = (props) => {    
  return (
    <Container maxWidth="xl" className="appBar" style={props.theme} padding={10}>
        <Container maxWidth="lg">
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item sm={4} textAlign="left">
                    <Typography fontFamily="inherit" fontSize={{xs: 20, sm: 30}}>New's Fanfare</Typography>
                </Grid>
                <Grid item sm={4} textAlign="right" justifyContent="space-around" paddingRight={2}>
                    <Grid container alignItems="center">
                        <Grid item xs={10} className="membersLink">
                            <a href="/dashboard" style={{textDecorationLine: 'none', color: 'inherit'}}><p>Accès membres</p></a>
                        </Grid>
                        <Grid item xs={2} padding={1}>
                            <AccountCircleIcon fontSize="large"/>           
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </Container>

      
  )
}

export default Header;