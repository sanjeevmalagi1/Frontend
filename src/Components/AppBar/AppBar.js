import React, { Component } from 'react';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DrawerCust from '../DrawerCust';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  appBar: {
    backgroundColor : '#2196f3',
    zIndex: theme.zIndex.drawer + 1,
  },
  title : {
    color : 'white'
  }
});

class AppBarCust extends Component {
  render() {
    const { classes } = this.props;
    return (
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              Scripbox - Assignment
            </Typography>
          </Toolbar>
        </AppBar>
    );
  }
}


AppBarCust.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarCust);
