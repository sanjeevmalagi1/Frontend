import React, { Component } from 'react';
import { connect } from 'react-redux';

import _ from 'lodash';
import moment from 'moment';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import SubtractIcon from '@material-ui/icons/Remove';

import SvgIcon from '@material-ui/core/SvgIcon';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button/Button';

import { addItem,removeItem } from '../../Actions';

const HeavyIcon = (props) => (
    <SvgIcon {...props}>
     <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2z"/>
     </SvgIcon>
);

const styles = theme => ({
    actionButton : {
        width : '25px !important',
        height : '25px'
    },
    notAvailable : {
        background : 'rgb(172,172,172,.3)'
    }
});


class Item extends Component {

    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleAdd = item => event => {
        this.props.addItem(item)
    };

    handleRemove = item => event => {
        this.props.removeItem(item)
    };

    render() {
        const { classes,item,inCartInfo } = this.props;
        const format = 'HH:mm'
        const menuType = item.vegflag==="veg" ? <HeavyIcon style={{ color : '#008001' }} /> : <HeavyIcon style={{ color : '#da251e' }} />
        const timings = _.split(item.availabletime, '-');
        const startTime = moment(timings[0],format);
        const endTime = moment(timings[1],format);

        const isAvailable = !(moment().isBetween(startTime, endTime));

        console.log(isAvailable);
        const avaiableClass = isAvailable ? classes.notAvailable : null;

        return (
          <ListItem className={avaiableClass}>
            <Grid container justify="space-between">
                <Grid item sm={1} xs={1} align="center">
                    <ListItemIcon>
                        { menuType }
                    </ListItemIcon>
                </Grid>
                <Grid item sm={6} xs={11} >
                    <ListItemText primary={item.name} secondary={item.description} />
                </Grid>

                <Grid item sm={4} align="center" xs={12}>
                    <Button disabled={isAvailable} color="primary" size="small" onClick={this.handleAdd(item)} aria-label="Add">
                        <AddIcon />
                    </Button>
                    {_.get(inCartInfo,"quantity"," ")}
                    <Button disabled={isAvailable} color="secondary" size="small" onClick={this.handleRemove(item)} aria-label="Remove">
                        <SubtractIcon />
                    </Button>
                </Grid>
                <Grid item sm={1} align="center" xs={12}>
                ₹{item.price}
                </Grid>

            </Grid>

          </ListItem>
        );
    }
}

function mapStateToProps(state,props){

    return {
        inCartInfo : state.cart[props.item.name]
    }
}

export default connect(mapStateToProps,{ addItem,removeItem })(withStyles(styles)(Item));
