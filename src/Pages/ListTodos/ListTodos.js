import React, { Component } from 'react';
import _ from 'lodash';

import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import LoadingPlaceholder from 'react-loading-placeholder'

import Todo from '../../Components/Todo'

import { getTodos } from '../../Actions/Todos';

const styles = theme => ({
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      minWidth: 0
    }
  });


class ListTodos extends Component {

    componentDidMount(){
        this.props.getTodos();
    }

    render() {
        const { classes,todos } = this.props;
        const todoItems = _.map(todos.data,(todo,key)=><Todo key={key} details={todo} />)
        
       return (
        <Grid container>
            <Grid item md={1} sm={false}/>
            <Grid item md={8} xs={12} >
                {todoItems}
            </Grid>
            <Grid item md={2} sm={false} />
        </Grid>
       )
           
    }
}

function mapStateToProps(state){
    
    return {
        todos : state.todos
    };
}

export default connect(mapStateToProps,{ getTodos  })(withStyles(styles)(ListTodos));
