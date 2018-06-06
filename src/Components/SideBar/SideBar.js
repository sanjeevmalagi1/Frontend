import React,{ Component } from 'react';

import _ from 'lodash';

import LoadingPlaceholder from 'react-loading-placeholder'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';

const styles = theme =>({
  toolbar: theme.mixins.toolbar,
});

class SideBar extends Component {

  render() {
    const { menuItems,classes } = this.props;
    const loading = _.get(menuItems,"loading",true)
    if(loading){
      return <LoadingPlaceholder numberOfRows={4} spaceBetween={3}></LoadingPlaceholder>;
    }

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
      <Paper>
        <List component="nav" className={classes.list}>
            { catogories }
        </List>
       </Paper>
    );
  }
}

function mapStateToProps(state){
  return {
    menuItems : state.menuItems
  };
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps,{})(withStyles(styles)(SideBar));
