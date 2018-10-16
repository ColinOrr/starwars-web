import React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';

const mapStateToProps = state => ({
  people: state.people,
});

const People = ({people}) => (
  <List>
  {
    people.map(person => (
      <ListItem key={person.id}>
        <Avatar><PersonIcon /></Avatar>
        <ListItemText
          primary={person.name}
          secondary={(person.species || '') + ' from ' + person.homeworld}
        />
      </ListItem>
    ))
  }
  </List>
);

export default connect(mapStateToProps)(People);
