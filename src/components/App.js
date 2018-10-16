import React from 'react';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import Header from './Header';
import View from './View';
import Navigation from './Navigation';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#00A4DB' },
    secondary: { main: '#15233C' },
  },
});

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  view: {
    flex: 1,
    overflow: 'scroll',
  },
};

const App = ({classes}) => (
  <MuiThemeProvider theme={theme}>
    <div className={classes.root}>
      <Header />
      <div className={classes.view}>
        <View />
      </div>
      <Navigation />
    </div>
  </MuiThemeProvider>
);

export default withStyles(styles)(App);
