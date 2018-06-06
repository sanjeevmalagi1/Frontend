import React,{ Component } from 'react';

import _ from 'lodash';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/Delete';
import Toolbar from '@material-ui/core/Toolbar';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import { clearCart } from '../../Actions'

const styles = theme =>({
  AppBar : {
    background : '#ffcc33'
  },
  title : {
    flex: 1
  },
  total :{
    fontSize : '1.2em'
  },
  toolbar: theme.mixins.toolbar,
});

class Cart extends Component {

  constructor(props){
    super(props);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClear(e){
    const { clearCart } = this.props;
    if(window.confirm("Are You Sure ?")){
      clearCart();
    }
  }

  onSubmit(){
    window.alert("Further Actions are Not Necessary!!")
  }

  render() {
    const { cart,classes } = this.props;
    let totalSum = 0;

    const cartRows = _.map(cart,(item,key)=>{
      totalSum+=item.totalPrice;
      return (
        <TableRow key={key}>
          <TableCell >{item.name}</TableCell>
          <TableCell >
            {`${item.price}X${item.quantity}`}
          </TableCell>
          <TableCell >{`₹${item.totalPrice}`}</TableCell>
        </TableRow>
      )
    })


    return (
      <Paper>
        <Divider />
        <AppBar position="static" className={classes.AppBar} >
            <Toolbar className={classes.Toolbar}>
                <Typography variant="title" className={classes.title} >Your Cart </Typography>
                <IconButton onClick={this.handleClear} className={classes.accountCircle} color="inherit" aria-label="Menu">
                    <AccountCircle />
                </IconButton>
            </Toolbar>
        </AppBar>
        <Table>
        <TableBody>
          {cartRows}
          <TableRow >
            <TableCell className={classes.total}>Total</TableCell>
            <TableCell ></TableCell>
            <TableCell className={classes.total}>{`₹${totalSum}`}</TableCell>
          </TableRow>
        </TableBody>
        </Table>
        <List className={classes.list}>
            <ListItem>
                <Button onClick={this.onSubmit} align="center" fullWidth variant="raised" color="primary">
                Checkout
                </Button>
            </ListItem>
        </List>
       </Paper>
    );
  }
}

function mapStateToProps(state){
  return {
    cart : state.cart
  };
}

Cart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps,{ clearCart })(withStyles(styles)(Cart));
