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
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import Typography from '@material-ui/core/Typography';
import LoadingPlaceholder from 'react-loading-placeholder'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

import { renderField,renderSelectField } from '../../Utils'
import { createTodo } from '../../Actions/Todos';
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
        this.props.createTodo(values)
    }

    render() {
        const { classes,handleSubmit } = this.props;
        
       return (
        <Grid container>
            <Grid item md={3} sm={false}/>
            <Grid item md={6} xs={12} >
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                                    <InputLabel htmlFor="age-simple">Assign To</InputLabel>
                                    <Field 
                                        fullWidth 
                                        name="assignTo" 
                                        component={renderSelectField} 
                                        required
                                    >
                                        <MenuItem value={"5b16d98f500b2d03800ffed7"}>sanjeev1</MenuItem>
                                        <MenuItem value={"5b1682ddbb120002b40e7738"}>sanjeev</MenuItem>
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
        initialValues: {
            dueDate : moment().format('YYYY-MM-DD'),
        }
    };
}

const styledCreateTodo = withStyles(styles)(CreateTodo);
const connectedComponenet = connect(mapStateToProps,{ createTodo })(styledCreateTodo)

export default reduxForm({
    form: 'createTodoForm',
    initialValues: {
        dueDate : moment().format('YYYY-MM-DD'),
    }
})(connectedComponenet)