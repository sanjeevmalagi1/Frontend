import React, { Component } from 'react';
import _ from 'lodash';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DrawerCust from '../DrawerCust';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  appBar: {
    backgroundColor : '#2196f3',
    zIndex: theme.zIndex.drawer + 1,
  },
  title : {
    color : 'white'
  },
  flex : {
    flex: 1,
  }
});

const RightIcon = (props) =>{
  if(_.isEmpty(props.auth)){
    return(
      <Link to={'/LogIn'}>
        <Button variant="raised" color="primary">
          LOGIN
        </Button>
      </Link>
    )
  }
  else{
    return(
      <Button onClick={props.logout} variant="raised" color="primary">
        Logout
      </Button>
    )
  }
}

class AppBarCust extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.openDrawer();
  }
 
  render() {
    const { classes } = this.props;
    return (
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <IconButton onClick={this.handleClick} className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Zoyo - Assignment
            </Typography>
            <RightIcon 
              auth={this.props.auth} 
              logout={this.props.logout}
            />
            
          </Toolbar>
        </AppBar>
    );
  }
}

function mapStateToProps(state){
  return {
    auth : state.auth
  }
}

function mapDispatchToProps(){
  return (dispatch) => ({
      openDrawer: () => {
        dispatch({ type: "OPEN_DRAWER" })
      },
      logout: () => {
        dispatch({ type: "LOGOUT" })
      }
  })
}

AppBarCust.propTypes = {
  classes: PropTypes.object.isRequired,
};

const StyledAppBar = withStyles(styles)(AppBarCust);

export default connect(mapStateToProps,mapDispatchToProps)(StyledAppBar)
