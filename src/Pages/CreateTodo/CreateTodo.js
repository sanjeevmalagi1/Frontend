import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';

import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

import { renderField,renderSelectField } from '../../Utils'

import { createTodo } from '../../Actions/Todos';
import { getUsers } from '../../Actions/Users';

const styles = theme => ({
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      minWidth: 0
    },
    formRow : {
        padding : '15px 5px'
    }
  });


class CreateTodo extends Component {

    onSubmit(values){
        const tags = values.tags ? values.tags.split(',') : [];
        values ={
            ...values,
            tags
        };
        this.props.createTodo(values,(error,done)=>{
            if(done){
                this.props.history.push('/');
            }
        })
    }

    componentDidMount(){
        this.props.getUsers();
    }

    render() {
        const { classes,handleSubmit } = this.props;
        
        const usersList = _.map(this.props.users.data,(user,key)=>(<MenuItem key={key} value={key}>{user.username}</MenuItem>));

       return (
        <Grid container>
            <Grid item md={3} sm={false}/>
            <Grid item md={6} xs={12} >
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} autoComplete="off">
                <Card>
                    <CardContent>
                        <Typography variant="display1" align="center" >Create New Todo</Typography>
                        
                            <Grid container spacing={40} className={classes.formRow}>
                                <Grid item md={6} xs={12}>
                                    <Field 
                                        label="Title" 
                                        fullWidth 
                                        name="title" 
                                        component={renderField} 
                                        type="text"
                                        required
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Field 
                                        label="Due Date" 
                                        fullWidth 
                                        name="dueDate" 
                                        component={renderField} 
                                        type="date"
                                        required
                                    />    
                                
                                </Grid>
                            </Grid>
                            <div className={classes.formRow}>
                                <FormControl className={classes.formControl} fullWidth>
                                    <Field 
                                        fullWidth 
                                        name="assignTo" 
                                        component={renderSelectField}
                                        label="Assign To"
                                        required
                                    >
                                    {usersList}
                                    </Field>
                                    
                                </FormControl>
                            </div>
                            
                            <div className={classes.formRow}>
                                <Field 
                                    label="Tags (Seperated by comma)" 
                                    fullWidth 
                                    name="tags" 
                                    component={renderField} 
                                    type="text"
                                />
                            </div>

                            <div className={classes.formRow}>
                                <Field 
                                    label="A short sleek description" 
                                    fullWidth 
                                    multiline
                                    name="description" 
                                    component={renderField} 
                                    rows={3}
                                    required
                                />
                            </div>
                        
                    </CardContent>
                    <CardActions>
                        <Button type="reset" fullWidth variant="raised">
                            Reset
                        </Button>
                        <Button type="submit" fullWidth variant="raised" color="primary">
                            Submit
                        </Button>
                    </CardActions>
                </Card>
                </form>
            </Grid>
            <Grid item md={2} sm={false} />
        </Grid>
       )
           
    }
}

function mapStateToProps(state){
    return {
        users : state.users
    };
}

function validate(values) {
    const errors = {};
    if(!values.title){
        errors.title = "Title should not be Empty";
    }
    if(!values.dueDate){
        errors.dueDate = "Due Date should not be Empty";
    }
    if(moment().startOf('Day').isAfter(values.dueDate)){
        errors.dueDate = "Due Date should be today or in future";
    }
    if(!values.assignTo){
        errors.assignTo = "Task should be assigned to someone";
    }
    if(!values.description){
        errors.description = "Description is required";
    }

    return errors
}

const styledCreateTodo = withStyles(styles)(CreateTodo);
const connectedComponenet = connect(mapStateToProps,{ createTodo,getUsers })(styledCreateTodo)

export default reduxForm({
    form: 'createTodoForm',
    validate,
    initialValues: {
        dueDate : moment().format('YYYY-MM-DD'),
    }
})(connectedComponenet)