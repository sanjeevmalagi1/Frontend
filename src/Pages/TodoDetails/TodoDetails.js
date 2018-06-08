import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';


import TodoDetailed from '../../Components/TodoDetailed'

import { getTodo } from '../../Actions/Todos'

const styles = theme => ({
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      minWidth: 0
    },
    formRow : {
        padding : '3px'
    }
  });


class TodoDetails extends Component {

    componentDidMount(){
        const todoId = this.props.match.params.todoId;

        if(!this.props.todoDetails){
            this.props.getTodo(todoId);
        }
        
    }

    render() {
       const { todoDetails } = this.props;
       if(!todoDetails){ return null; }
        
       return (
        <Grid container>
            <Grid item md={3} sm={false}/>
            <Grid item md={6} xs={12} >
                <TodoDetailed details={todoDetails} />
            </Grid>
            <Grid item md={3} sm={false} />
        </Grid>
       )
           
    }
}

function mapStateToProps(state,props){
    const todoId = props.match.params.todoId; 
    
    return {
        todoDetails : state.todos.data[todoId]
    };
}

const styledTodoDetails = withStyles(styles)(TodoDetails);
export default connect(mapStateToProps,{ getTodo })(styledTodoDetails);