import React,{ Component } from 'react';
import { connect } from 'react-redux';

import _ from 'lodash';

import LoadingPlaceholder from 'react-loading-placeholder'

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';

const drawerWidth = 240;

const styles = theme =>({
  toolbar: theme.mixins.toolbar,
  drawerPaper : {
    position: 'relative',
    width: drawerWidth,
  }
});

class DrawerCust extends Component {

  render() {
    const { menuItems,classes } = this.props;
    const loading = _.get(menuItems,"loading",true)
    
    const catogories = _.map(menuItems.categories,(category,name)=>(
      <ListItem button key={name}>
          <ListItemText>
            <a href={`#${name}`}>
              <Typography>{name}</Typography>
            </a>
          </ListItemText>
      </ListItem>
    ))

    return (
      <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Todos List" />
        </ListItem>
        <ListItem button component="a"  >
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
    );
  }
}

function mapStateToProps(state){
  return {
    menuItems : state.menuItems
  };
}

DrawerCust.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps,{})(withStyles(styles)(DrawerCust));
