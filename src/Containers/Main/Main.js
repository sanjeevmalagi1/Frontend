import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch,Redirect } from 'react-router-dom'

import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import AppBarCust from '../../Components/AppBar';
import DrawerCust from '../../Components/DrawerCust'

import ListTodos from '../../Pages/ListTodos';
import CreateTodo from '../../Pages/CreateTodo';
import LogIn from '../../Pages/LogIn';
import SignUp from '../../Pages/SignUp';
import TodoDetails from '../../Pages/TodoDetails';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest}) => (
  <Route
    {...rest}
    render={props =>{
      if(!isAuthenticated){
        return (
          <Redirect to={{ pathname: '/LogIn', state: { from: props.location} }} />
        )
      }
      return (
        <Component {...props} />
      )
    } 
  }
  />
);

const AuthRoute = ({ component: Component, isAuthenticated, ...rest}) => (
  <Route
    {...rest}
    render={props =>{
      if(isAuthenticated){
        return (
          <Redirect to={{ pathname: '/', state: { from: props.location} }} />
        )
      }
      return (
        <Component {...props} />
      )
    } 
  }
  />
);

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

function Main(props) {
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
            <PrivateRoute exact path="/CreateTodo"  isAuthenticated={props.auth.token} name="Create Todo" component={CreateTodo} />
            <AuthRoute isAuthenticated={props.auth.token} exact path="/LogIn" name="Log In" component={LogIn}/>
            <AuthRoute isAuthenticated={props.auth.token} exact path="/SignUp" name="Sign Up" component={SignUp}/>
            <Route exact path="/:todoId" name="View Todo" component={TodoDetails}/>
          </Switch>
        </div>
      </main>
    </div>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

function  mapStateToProps(state) {
    return {
      auth : state.auth
    }
}

export default connect(mapStateToProps,{})(withStyles(styles)(Main));
