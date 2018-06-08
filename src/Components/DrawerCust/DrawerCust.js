import React,{ Component } from 'react';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const drawerWidth = 240;

const styles = theme =>({
  toolbar: theme.mixins.toolbar,
  drawerPaper : {
    position: 'relative',
    width: drawerWidth,
  },
  link : {
    textDecoration: 'none'
  }
});

class DrawerCust extends Component {

  handleClose(){
    this.props.closeDrawer();
  }

  handleOpen(){
    this.props.openDrawer();
  }

  render() {
    const { classes } = this.props;
    
    return (
      <SwipeableDrawer
        open={this.props.menu.drawer}  
        anchor="left"
        onClose={this.handleClose.bind(this)}
        onOpen={this.handleOpen.bind(this)}
    >
      <div className={classes.toolbar} />
      <List component="nav" className={classes.drawerPaper}>
        <NavLink to="/" activeClassName="active" className={classes.link} onClick={this.handleClose.bind(this)}>
          <ListItem button>
            <ListItemText primary="Todos List" />
          </ListItem>
        </NavLink>
        <NavLink to="/CreateTodo" activeClassName="active" className={classes.link} onClick={this.handleClose.bind(this)}>
        <ListItem button  >
          <ListItemText primary="Create Todo" />
        </ListItem>
        </NavLink>
      </List>
      <Divider />
    </SwipeableDrawer>
    );
  }
}

function mapStateToProps(state){
  return {
    menu : state.menu
  }
}

function mapDispatchToProps(){
  return (dispatch) => ({
      closeDrawer: () => {
        dispatch({ type: "CLOSE_DRAWER" })
      },
      openDrawer : () => {
        dispatch({ type: "OPEN_DRAWER" })
      }
  })
}

DrawerCust.propTypes = {
  classes: PropTypes.object.isRequired,
};

const StyledDrawer = withStyles(styles)(DrawerCust)

export default connect(mapStateToProps,mapDispatchToProps)(StyledDrawer);
