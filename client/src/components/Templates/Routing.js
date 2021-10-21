import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from '../pages/Contact';
import About from '../pages/About';
import Home from '../pages/Home';
import { Grid } from '@mui/material';
import './styles.css';
import { mainTheme } from "./themes";
import Dashboard from '../pages/Dashboard';

const Routing = (props) => {

  const navLinks = [
    {
      text: 'Accueil',
      path: '/'
    },
    {
      text: 'Dashboard',
      path: '/dashboard'
    },
    {
      text: 'Contact',
      path: '/contact'
    },
    {
      text: 'A Propos',
      path: '/about'
    }
  ];
  
  const { secondaryColor, secondaryText } = mainTheme;
  const mouseOverHandler = (e) => {
    e.target.style.backgroundColor = secondaryColor;
    e.target.style.color = secondaryText
  }
  const mouseLeaveHandler = (e) => {
    e.target.style.backgroundColor = 'white';
    e.target.style.color = 'black';
  }
  return (
    <Router>
      <Grid sx={{marginTop: '1rem', position: 'absolute', top: '5rem', left: 0}} container justifyContent="center" columnSpacing={{ xs: 0, sm: 2, md: 3 }}>
      {navLinks.map((item, index) => {
        return (
          <Grid item xs={2} key={index} textAlign="center" marginBottom={3}>
            
            <Link 
              className="navLinks" 
              style={{
                textDecorationLine: 'none', color: 'inherit', padding: '1rem 2.5rem', backgroundColor: 'white', borderRadius: '8px'
              }}
              onMouseOver={(e) => mouseOverHandler(e)}
              onMouseLeave={(e) =>  mouseLeaveHandler(e)}
              to={item.path}>{item.text}</Link>
          </Grid>
          )
      })}
      </Grid>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />      
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
  </Router>
      
  )
}

export default Routing;