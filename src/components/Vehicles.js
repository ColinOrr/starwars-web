import React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import VehicleIcon from '@material-ui/icons/Motorcycle';

const mapStateToProps = state => ({
  vehicles: state.vehicles,
});

const Vehicles = ({vehicles}) => (
  <List>
  {
    vehicles.map(vehicle => (
      <ListItem key={vehicle.id}>
        <Avatar><VehicleIcon /></Avatar>
        <ListItemText
          primary={vehicle.name}
          secondary={'Model: ' + vehicle.model}
        />
      </ListItem>
    ))
  }
  </List>
);

export default connect(mapStateToProps)(Vehicles);
