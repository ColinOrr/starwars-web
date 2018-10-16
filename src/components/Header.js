import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => (
  <AppBar position="relative" color="secondary">
    <Toolbar>
      <Typography color="inherit" variant="h6">
        Star Wars
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
