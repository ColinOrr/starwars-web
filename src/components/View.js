import React from 'react';
import { connect } from 'react-redux';
import { Views } from '../actions';
import People from './People';
import Planets from './Planets';
import Species from './Species';
import Starships from './Starships';
import Vehicles from './Vehicles';

const mapStateToProps = state => ({
  view: state.view,
});

const View = ({view}) => {
  switch (view) {
    case Views.PEOPLE: return <People />;
    case Views.PLANETS: return <Planets />;
    case Views.SPECIES: return <Species />;
    case Views.STARSHIPS: return <Starships />;
    case Views.VEHICLES: return <Vehicles />;
    default: return <div />;
  }
};

export default connect(mapStateToProps)(View);
