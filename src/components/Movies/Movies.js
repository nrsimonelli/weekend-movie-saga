import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Movies extends Component {

    render(){
        return (
            <div>

            </div>
        ) // end return
    } // end render
} // end component

const putReduxStateOnProps=(reduxState)=>({
    reduxState
})

export default withRouter(connect(putReduxStateOnProps)(Movies));