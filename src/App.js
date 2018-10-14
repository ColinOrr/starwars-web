import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import PlanetsIcon from '@material-ui/icons/Language';
import SpeciesIcon from '@material-ui/icons/BugReport';
import StarshipsIcon from '@material-ui/icons/AirplanemodeActive';
import VehiclesIcon from '@material-ui/icons/Motorcycle';

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
      <AppBar position="relative">
        <Toolbar>
          <Typography color="inherit" variant="h6">
            Star Wars
          </Typography>
        </Toolbar>
      </AppBar>
      <List style={{flex: 1, overflow: 'scroll'}}>
      {
        Array(50).fill().map((x, i) => (
          <ListItem key={i} button>
            <Avatar><PersonIcon /></Avatar>
            <ListItemText
              primary="Person"
              secondary="Species from Homeworld"
            />
          </ListItem>
        ))
      }
      </List>
      <BottomNavigation value="people">
        <BottomNavigationAction label="People" value="people" icon={<PeopleIcon />} />
        <BottomNavigationAction label="Planets" value="planets" icon={<PlanetsIcon />} />
        <BottomNavigationAction label="Species" value="species" icon={<SpeciesIcon />} />
        <BottomNavigationAction label="Starships" value="starships" icon={<StarshipsIcon />} />
        <BottomNavigationAction label="Vehicles" value="vehicles" icon={<VehiclesIcon />} />
      </BottomNavigation>
    </div>
  )
}

export default App;
