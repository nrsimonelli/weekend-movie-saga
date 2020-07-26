import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from '../Header/Header';


class Details extends Component {

    componentDidMount() {
        console.log('details did mount');
        console.log('this.unicorn',this.props.match.params.id);
        this.grabMovie();
        this.grabGenre();
    }
    // display movie by id
    grabMovie = () => {
        this.props.dispatch({ type: 'FETCH_SINGLE', payload: this.props.match.params.id})
    }
    grabGenre = () => {
        console.log('grabGenre');
        
    }

    render(){
        return (
            <div className='theme'>
                <Header 
                    title='Details'
                    subtitle='movie saga'
                    return='return'
                />
                <div className='hailMary'>
                    <div className='detailsContainer'>
                        <div className='detailsTitle'>
                            <p className='detailsTitleText'>{this.props.reduxState.singleMovieReducer.title}</p>
                            <p className='detailsGenreText'>genres</p>
                        </div>
                        <div className='detailsDescription'> 
                            <p className='detailsDescriptionText'>{this.props.reduxState.singleMovieReducer.description}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        ) // end return
    } // end render
} // end component

const putReduxStateOnProps=(reduxState)=>({
    reduxState
})

export default withRouter(connect(putReduxStateOnProps)(Details));