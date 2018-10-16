import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PeopleIcon from '@material-ui/icons/People';
import PlanetsIcon from '@material-ui/icons/Language';
import SpeciesIcon from '@material-ui/icons/BugReport';
import StarshipsIcon from '@material-ui/icons/AirplanemodeActive';
import VehiclesIcon from '@material-ui/icons/Motorcycle';
import { Views, navigateTo } from '../actions';

const mapStateToProps = state => ({
  value: state.view,
});

const mapDispatchToProps = dispatch => ({
  onChange: (event, value) => dispatch(navigateTo(value)),
});

const styles = {
  root: {
    backgroundColor: '#F7F7F7',
  },
};

const Navigation = ({value, onChange, classes}) => (
  <BottomNavigation value={value} onChange={onChange} className={classes.root}>
    <BottomNavigationAction label="People" value={Views.PEOPLE} icon={<PeopleIcon />}  className={classes.bottomNavigationAction} />
    <BottomNavigationAction label="Planets" value={Views.PLANETS} icon={<PlanetsIcon />} />
    <BottomNavigationAction label="Species" value={Views.SPECIES} icon={<SpeciesIcon />} />
    <BottomNavigationAction label="Starships" value={Views.STARSHIPS} icon={<StarshipsIcon />} />
    <BottomNavigationAction label="Vehicles" value={Views.VEHICLES} icon={<VehiclesIcon />} />
  </BottomNavigation>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Navigation));
