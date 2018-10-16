import { combineReducers } from 'redux';
import { Views } from '../actions';

let initialState = {
  view: Views.PEOPLE,
  people: [
    { id: '1', name: 'Luke Skywalker', species: null, homeworld: 'Tatooine' },
    { id: '2', name: 'C-3PO', species: 'Droid', homeworld: 'Tatooine' },
    { id: '3', name: 'R2-D2', species: 'Droid', homeworld: 'Naboo' },
  ],
  planets: [
    { id: '1', name: 'Tatooine', terrain: 'desert' },
    { id: '2', name: 'Alderaan', terrain: 'grasslands, mountains' },
    { id: '3', name: 'Yavin IV', terrain: 'jungle, rainforests' },
  ],
  species: [
    { id: '1', name: 'Human', classification: 'mamal' },
    { id: '2', name: 'Droid', classification: 'artificial' },
    { id: '3', name: 'Wookie', classification: 'mamal' },
  ],
  starships: [
    { id: '1', name: 'CR90 corvette', model: 'CR90 corvette' },
    { id: '2', name: 'Star Destroyer', model: 'Imperial I-class Star Destroyer' },
    { id: '3', name: 'Death Star', model: 'DS-1 Orbital Battle Station' },
  ],
  vehicles: [
    { id: '1', name: 'TIE/LN starfighter', model: 'Twin Ion Engine/Ln Starfighter' },
    { id: '2', name: 'Snowspeeder', model: 't-47 airspeeder' },
    { id: '3', name: 'AT-AT', model: 'All Terrain Armored Transport' },
  ],
};

function view(state = initialState.view, action) {
  switch (action.type) {
    case 'NAVIGATE': return action.view;
    default: return state;
  }
}

function people(state = initialState.people, action) {
  return state;
}

function planets(state = initialState.planets, action) {
  return state;
}

function species(state = initialState.species, action) {
  return state;
}

function starships(state = initialState.starships, action) {
  return state;
}

function vehicles(state = initialState.vehicles, action) {
  return state;
}

export default combineReducers({
  view,
  people,
  planets,
  species,
  starships,
  vehicles,
});
