import React, { Component } from 'react';
import _ from 'lodash';

import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

import LoadingPlaceholder from 'react-loading-placeholder'

import SearchBar from '../../Components/SearchBar';
import Todo from '../../Components/Todo'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { getTodos } from '../../Actions/Todos';

const styles = theme => ({
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      minWidth: 0
    },
    container : {
        width : '90%',
        margin : 'auto'
    },
    new : {
        height : '390px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }
  });


class ListTodos extends Component {

    componentDidMount(){
        this.props.getTodos();
    }

    render() {
        const { classes,todos } = this.props;
        
        if(todos.error){
            return <div>Check your Internet Connection</div>
        }
        
        const todoItems = _.chain(todos.data)
                           .filter(todo=>( true ))
                           .map((todo,key)=><Grid className={classes.item} key={key} item md={4} sm={6} xs={12}><Todo details={todo} /></Grid>)
                           .value();
        
       return (
        <div className={classes.container}>
            <SearchBar />
            <Grid container spacing={24} >
                <Grid item md={4} sm={6} xs={12}> 
                    <Card className={classes.new}>
                        <CardContent >
                            <Link to={'/CreateTodo'}>
                                <Button>Create New Todo</Button>
                            </Link>
                        </CardContent>   
                    </Card>
                </Grid>
                { !todos.loading ? todoItems : <LoadingPlaceholder numberOfRows={3} spaceBetween={7}/>}
            </Grid>
        </div>
       )
           
    }
}

function mapStateToProps(state){
    return {
        todos : state.todos
    };
}

export default connect(mapStateToProps,{ getTodos  })(withStyles(styles)(ListTodos));
