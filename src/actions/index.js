export const Views = {
  PEOPLE: 'PEOPLE',
  PLANETS: 'PLANETS',
  SPECIES: 'SPECIES',
  STARSHIPS: 'STARSHIPS',
  VEHICLES: 'VEHICLES',
}

export const navigateTo = view => ({
  type: 'NAVIGATE',
  view
});
