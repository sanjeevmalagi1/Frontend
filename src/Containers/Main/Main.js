import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch,Redirect } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';

import AppBarCust from '../../Components/AppBar';
import DrawerCust from '../../Components/DrawerCust'

import ListTodos from '../../Pages/ListTodos';
import CreateTodo from '../../Pages/CreateTodo';
import LogIn from '../../Pages/LogIn';
import SignUp from '../../Pages/SignUp';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  mainContent : {
  },
  toolbar: theme.mixins.toolbar,
});

function ClippedDrawer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBarCust />
      <DrawerCust />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.mainContent}>
          <Switch>
          
            <Route exact path="/" name="Todo List" component={ListTodos}/>
            <Route exact path="/CreateTodo" name="Create Todo" component={CreateTodo}/>
            <Route exact path="/LogIn" name="Log In" component={LogIn}/>
            <Route exact path="/SignUp" name="Sign Up" component={SignUp}/>
          </Switch>
        </div>
      </main>
    </div>
  );
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);
