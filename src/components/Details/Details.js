import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Details extends Component {

    componentDidMount() {
        console.log('details did mount');
        console.log('this.unicorn',this.props.match.params.id);
        this.grabMovie();
    }
    // display movie by id
    grabMovie = () => {
        this.props.dispatch({ type: 'FETCH_SINGLE', payload: this.props.match.params.id})
    }

    render(){
        return (
            <div>
                <p>Details</p>
                {JSON.stringify(this.props.reduxState.movieReducer)}
            </div>
        ) // end return
    } // end render
} // end component

const putReduxStateOnProps=(reduxState)=>({
    reduxState
})

export default withRouter(connect(putReduxStateOnProps)(Details));