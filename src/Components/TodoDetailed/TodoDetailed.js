import React, { Component } from 'react';
import { connect } from 'react-redux';

import swal from 'sweetalert';
import _ from 'lodash';
import moment from 'moment';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { updateTodo,deleteTodo } from '../../Actions/Todos';

const styles = theme => ({
    card : {
        marginBottom : '7px'
    },
    dueDate : {
        padding : '10px'
    },
    desc : {
        padding : '10px',
        background : '#eeecec'
    },
    tags : {
        align : 'center',
        paddingBottom : '10px'
    },
    userDetails : {
        padding : '5px'
    },
    avatar : {
        background : 'orange'
    },
    detailsButton : {
        background : '#2196F3',
        color : 'white'
    }
});


class TodoDetailed extends Component {

    handleStatusChange(e){
        if(this.props.details.status === e.target.value){
            return null;
        }
        swal("Are you sure you want to do this ?")
        .then((yes) => {
            if(yes){
                this.props.updateTodo(this.props.details._id,{ status : e.target.value },(error,done)=>{
                    if(error.response){
                        swal("Sorry", error.response.data.message, "error");
                    }
                })
                swal("Done!", "Status has now changed", "success");
            }
        });
    }

    handleDelete(e){
        swal("Are you sure you want to do this ?")
        .then(yes => {
            if(yes){
                this.props.deleteTodo(this.props.details._id,(error,result)=>{
                    if(error.response){
                        swal("Sorry", error.response.data.message, "error");
                    }   
                })
                swal("Done!", "The Todo has been deleted", "success");
            }
        })
    }

    render() {
        const { classes,details } = this.props;
        const possibleStatuses = ['tobedone','doing','done'];

        const statusLane = possibleStatuses.indexOf(details.status);
        
        const tags = _.map(details.tags,(tag,key)=><Chip key={key} label={tag} className={classes.chip} />)
        
        return (
            <Card className={classes.card} >
                <CardContent>
                    <Typography variant="caption" align="center" color="textSecondary">
                        { details.status.toUpperCase() }
                    </Typography>

                    <Typography variant="headline" align="center" color="textSecondary">
                        { details.title }
                    </Typography>
                    
                    <div className={classes.dueDate}>
                        <Typography align="center" variant="caption" >
                            DUE DATE
                        </Typography>
                        <Typography variant="subheading" align="center">
                        { moment(details.dueDate).format('DD : MMM : YYYY') }
                        </Typography>
                    </div>

                    <div className={classes.tags}>
                        { tags }
                    </div>

                    <div className={classes.desc}>
                        <Typography>
                            {details.description}
                        </Typography>
                    </div>

                    { details.assignedTo ?   
                    <div>
                        <Typography variant="caption" align="center" color="textSecondary">
                            ASSIGNED TO
                        </Typography>
                        <ListItem className={classes.userDetails} button>
                            <Avatar className={classes.avatar}>{details.assignedTo.username.substring(0,2).toUpperCase() }</Avatar>
                            <ListItemText>{details.assignedTo.username}</ListItemText>
                        </ListItem>
                    </div>                  
                    :
                    null
                    }
                    
                </CardContent>
                <CardActions>
                    <Select
                        value={details.status}
                        onChange={this.handleStatusChange.bind(this)}
                        fullWidth
                    >
                        <MenuItem disabled={statusLane+1 !== 0} value={'tobedone'}>To Be Done</MenuItem>
                        <MenuItem disabled={statusLane+1 !== 1} value={'doing'}>Doing</MenuItem>
                        <MenuItem disabled={statusLane+1 !== 2} value={'done'}>Done</MenuItem>
                    </Select>
                    <Button onClick={this.handleDelete.bind(this)} variant="raised" color="secondary" fullWidth>
                        Delete
                    </Button>
                    
                </CardActions>
            </Card>
        )
    }
}

function mapStateToProps(state){
    return {}
}

export default connect(mapStateToProps,{ updateTodo,deleteTodo })(withStyles(styles)(TodoDetailed));
