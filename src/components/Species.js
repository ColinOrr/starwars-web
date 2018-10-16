import React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import SpeciesIcon from '@material-ui/icons/BugReport';

const mapStateToProps = state => ({
  species: state.species,
});

const Species = ({species}) => (
  <List>
  {
    species.map(s => (
      <ListItem key={s.id}>
        <Avatar><SpeciesIcon /></Avatar>
        <ListItemText
          primary={s.name}
          secondary={'Classification: ' + s.classification}
        />
      </ListItem>
    ))
  }
  </List>
);

export default connect(mapStateToProps)(Species);
