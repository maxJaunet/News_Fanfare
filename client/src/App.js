import Header from './components/Templates/Header';
import Footer from './components/Templates/Footer';
import Routing from './components/Templates/Routing';
import { mainTheme } from './components/Templates/themes';
import { Container } from '@mui/material';
import './styles.css';
import { useStyles } from './components/Templates/fonts';
import { useState } from 'react';

const App = () => {
  const classes = useStyles();
  document.body.style.margin = 0;
  const {primaryColor, secondaryColor,ternaryColor, primaryText, secondaryText, lightText} = mainTheme;

  const layoutTheme = {
      backgroundColor: primaryColor,
      color: secondaryText,
      fontFamily: 'RocknRoll One'
  }
  const navTheme = {
    backgroundColor: secondaryColor,
    color: lightText,
    fontFamily: 'Roboto'
  }
  
  return (
    <div className={classes.App}>
      <Header theme={layoutTheme} className="appBar"/>
      <Container maxWidth="xl">
        <Container maxWidth="lg">
        <Routing 
         theme={navTheme} separatorColor={ternaryColor}
         className="routerGroup"
          />
        </Container>
      </Container>
      <Footer theme={layoutTheme} />
   </div>

   
  )
}

export default App;