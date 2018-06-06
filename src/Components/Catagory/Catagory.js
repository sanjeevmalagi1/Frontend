import React, { Component } from 'react';
import _ from 'lodash';

import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

import Item from '../Item'

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    content: {
      marginBottom : '7px'
    },
    catagoryTitle :{
      padding : '10px',
      background : '#ffcc33'
    }
  });


class Catagory extends Component {

    render() {
        const { items,name,classes } = this.props;

        const itemsList = _.map(items,(item,key)=>(
            <Item item={item} key={key} />
        ));

        return (
        <Card id={name} className={classes.content}>
        <Typography className={classes.catagoryTitle} align="center" variant="title">{name}</Typography>
        <List
        >
          {itemsList}
        </List>
        </Card>
        );
    }
}

export default withStyles(styles)(Catagory);
