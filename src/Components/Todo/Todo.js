import React, { Component } from 'react';
import { connect } from 'react-redux';

import _ from 'lodash';
import moment from 'moment';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';


const styles = theme => ({
    card : {
        marginBottom : '7px'
    },
    desc : {
        paddingTop : '10px',
        paddingBottom : '10px'
    },
    chip: {
        marginRight: theme.spacing.unit,
    }
});


class Todo extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const { classes,details } = this.props;

        const tags = _.map(details.tags,(tag,key)=><Chip key={key} label={tag} className={classes.chip} />)
        
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="title" color="textSecondary">
                        { details.title }
                    </Typography>
                    <Typography className={classes.desc}>
                        { details.description }
                    </Typography>
                    { tags }
                    
                </CardContent>
            </Card>
        )
    }
}

function mapStateToProps(state){
    return {}
}

export default connect(mapStateToProps,{  })(withStyles(styles)(Todo));
