import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';

import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


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
import { login } from '../../Actions/Auth';


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


class LogIn extends Component {

    onSubmit(values){
        this.props.login(values,(error,done) => {
            if(done){
                this.props.history.push('/');
            }
        });
    }

    render() {
        const { classes,handleSubmit } = this.props;
        
       return (
        <Grid container>
            <Grid item md={4} sm={false}/>
            <Grid item md={4} xs={12} >
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Card>
                    <CardContent>
                        <Typography variant="display1" align="center" >Log In</Typography>
                        <Link to={'/SignUp'}>
                            <Typography align="center">
                                <Button>New ? Register ! </Button>
                            </Typography>
                        </Link>
                        
                            <div className={classes.formRow}>
                                <Field 
                                    placeholder="Username" 
                                    fullWidth 
                                    name="username" 
                                    component={renderField} 
                                    type="text"
                                    required
                                />
                            </div>
                            <div className={classes.formRow}>
                                <Field 
                                    label="Password" 
                                    fullWidth 
                                    name="password" 
                                    component={renderField} 
                                    type="password"
                                    required
                                /> 
                            </div>
                            <div className={classes.formRow}>
                                <FormControl className={classes.formControl} fullWidth>
                                    <InputLabel htmlFor="age-simple">Role</InputLabel>
                                    <Field 
                                        fullWidth 
                                        name="role" 
                                        component={renderSelectField} 
                                        required
                                    >
                                        <MenuItem value={"Normal"}>Normal</MenuItem>
                                        <MenuItem value={"Admin"}>Admin</MenuItem>
                                    </Field>
                                    
                                </FormControl>
                            </div>
                    </CardContent>
                    <CardActions>
                        <Button type="submit" fullWidth variant="raised" color="primary">
                            Log In
                        </Button>
                    </CardActions>
                </Card>
                </form>
            </Grid>
            <Grid item md={4} sm={false} />
        </Grid>
       )
           
    }
}

function mapStateToProps(){
    
    return {};
}

const styledLogIn = withStyles(styles)(LogIn);
const connectedComponenet = connect(mapStateToProps,{ login })(styledLogIn)

export default reduxForm({
    form: 'logInForm'
})(connectedComponenet)