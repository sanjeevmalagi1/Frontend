import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

import { renderField } from '../../Utils'
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
        this.props.login(values);
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

function validate(values) {
    const errors = {};
    if(!values.username){
        errors.username = "Username cannot be empty";
    }
    if(!values.password){
        errors.password = "Password cannot be empty";
    }
    
    return errors;
}

const styledLogIn = withStyles(styles)(LogIn);
const connectedComponenet = connect(mapStateToProps,{ login })(styledLogIn)

export default reduxForm({
    form: 'logInForm',
    validate
})(connectedComponenet)