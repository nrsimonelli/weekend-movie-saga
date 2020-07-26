import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from '../Header/Header';
import Images from '../Images/Images';

class Home extends Component {

    componentDidMount() {
        console.log('home mounted');
        this.getMovie();
    } // end didMount

    getMovie = () => {
        this.props.dispatch({ type: 'FETCH_MOVIE'});
    } // end get movie

    render(){
        return (
            <div>
                <Header 
                    title='Home'
                    subtitle='movie saga'
                />
                <div className='hailMary'>
                {this.props.reduxState.movieReducer.map((x, key) => (
                    <Images 
                        key={key}
                        id={x.id}
                        source={x.poster}
                        title={x.title}
                        description={x.description}
                    />
                ))}
                </div>
               
            </div>
        ) // end return
    } // end render
} // end component

const putReduxStateOnProps=(reduxState)=>({
    reduxState
})

export default withRouter(connect(putReduxStateOnProps)(Home));