import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Images extends Component {

    pushToDetails = (filmId) => {
        console.log('image was clicked with id:', filmId);
        this.props.history.push(`/details/${filmId}`);
    }

    render(){
        let film = this.props;
        return (
            <div className='imageCard'>
                <div className='imageDiv'>
                    <img  
                        src={film.source} 
                        alt={film.title}>    
                    </img>
                </div>
                <div className='movieTitle'>
                    <p  id={film.id}
                        className='movieTitleText'
                        onClick={ () => this.pushToDetails(film.id)}
                        >
                        {film.title}
                    </p>
                </div>
                
            </div>
        ) // end return
    } // end render
} // end component

const putReduxStateOnProps=(reduxState)=>({
    reduxState
})

export default withRouter(connect(putReduxStateOnProps)(Images));