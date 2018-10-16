import React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import StarshipIcon from '@material-ui/icons/AirplanemodeActive';

const mapStateToProps = state => ({
  starships: state.starships,
});

const Starships = ({starships}) => (
  <List>
  {
    starships.map(starship => (
      <ListItem key={starship.id}>
        <Avatar><StarshipIcon /></Avatar>
        <ListItemText
          primary={starship.name}
          secondary={'Model: ' + starship.model}
        />
      </ListItem>
    ))
  }
  </List>
);

export default connect(mapStateToProps)(Starships);
