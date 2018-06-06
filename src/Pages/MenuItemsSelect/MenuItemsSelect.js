import React, { Component } from 'react';
import _ from 'lodash';

import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import LoadingPlaceholder from 'react-loading-placeholder'

import Catagory from '../../Components/Catagory'

import { getMenuItems } from '../../Actions/MenuItems';

const styles = theme => ({
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      minWidth: 0
    }
  });


class MenuItemsSelect extends Component {

    componentDidMount(){
        const { getMenuItems } = this.props;
        getMenuItems();
    }

    render() {
        const { classes,menuItems } = this.props;
        const loading = _.get(menuItems,"loading",true)
        if(loading){
            return <LoadingPlaceholder numberOfRows={6} spaceBetween={1}></LoadingPlaceholder>;
        }

        const catogories = _.map(menuItems.categories,(category,name)=>(
            <Catagory key={name} items={category} name={name}/>
          ))
        return (
            <main className={classes.content}>
                {catogories}
            </main>
        );
    }
}

function mapStateToProps(state){

    return {
        menuItems : state.menuItems
    };
}

export default connect(mapStateToProps,{ getMenuItems })(withStyles(styles)(MenuItemsSelect));
