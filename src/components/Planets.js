import React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import PlanetIcon from '@material-ui/icons/Public';

const mapStateToProps = state => ({
  planets: state.planets,
});

const Planets = ({planets}) => (
  <List>
  {
    planets.map(planet => (
      <ListItem key={planet.id}>
        <Avatar><PlanetIcon /></Avatar>
        <ListItemText
          primary={planet.name}
          secondary={'Terrain: ' + planet.terrain}
        />
      </ListItem>
    ))
  }
  </List>
);

export default connect(mapStateToProps)(Planets);
