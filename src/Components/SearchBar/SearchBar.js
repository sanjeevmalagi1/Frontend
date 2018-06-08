import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchCircle from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';



const styles = theme => ({
    SearchBar : {
         padding : '25px 5px'
    }
});


class SearchBar extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.onSearchEnter(event.target.value)
    }

    render() {
        const { classes } = this.props;

        return (
            <TextField
                    id="input-with-icon-textfield"
                    placeholder="Seach for the Todos"
                    onChange={this.handleChange}
                    fullWidth
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchCircle />
                        </InputAdornment>
                    ),
                    }}
                    className={classes.SearchBar}
                />
        )
    }
}

function mapStateToProps(state){
    return {}
}

function mapDispatchToProps(){
    return (dispatch) => ({
        onSearchEnter: (value) => {
          dispatch({ type: "SEARCH_CHANGED", payload : value })
        }
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(SearchBar));
