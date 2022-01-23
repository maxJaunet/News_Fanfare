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
import Dashboard from '../pages/Dashboard';

const Routing = () => {

  const navLinks = [
    {
      id: '2250440',
      text: 'Accueil',
      path: '/',
    },
    {
      id: '2250441',
      text: 'Dashboard',
      path: '/dashboard',
    },
    {
      id: '2250442',
      text: 'Contact',
      path: '/contact',
    },
    {
      id: '2250443',
      text: 'A Propos',
      path: '/about',
    }
  ];
  
  const mouseOverHandler = ({target}) => {
    target.style.backgroundColor = '#FAAD2D';
    target.style.color = '#FAAD2D';
  }
  const mouseLeaveHandler = ({target}) => {
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
  }

  return (
    <Router>
      <Grid sx={{marginTop: '1rem', position: 'absolute', top: '5rem', left: 0}}
        container 
        justifyContent="center"
        columnSpacing={{ xs: 0, sm: 2, md: 3 }}
      >
      {navLinks.map(({id, text, path}) => {
        return (
          <Grid item xs={2} key={id} textAlign="center" marginBottom={3}>
            <Link 
              className="navLinks" 
              style={{
                textDecorationLine: 'none',
                color: 'inherit',
                padding: '1rem 2.5rem',
                backgroundColor: 'white',
                borderRadius: '8px'
              }}
              onMouseOver={(e) => mouseOverHandler(e)}
              onMouseLeave={(e) =>  mouseLeaveHandler(e)}
              to={path}>{text}</Link>
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