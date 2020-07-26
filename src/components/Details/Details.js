import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from '../Header/Header';


class Details extends Component {

    state = { isShown: false };

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
        this.props.dispatch({ type: 'FETCH_GENRE', payload: this.props.match.params.id})
    }

    showEditForm = () => {
        this.setState({ isShown: true}, () =>{

        })
        this.toggleScrollLock();
        
    }
    onSubmit = (event) => {
        event.preventDefault(event);
        console.log('you clicked update');

        this.closeEditForm();
        this.grabMovie();
        this.grabGenre();
        
    }

    closeEditForm = () => {
        this.setState({ isShown: false });
        this.toggleScrollLock();
    }
    onKeyDown = (event) => {
        if (event.keyCode === 27) {
          this.closeEditForm();
        }
      };
    onClickOutside = (event) => {
        if (this.form && this.form.contains(event.target)) return;
        this.closeEditForm();
      };

    toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('scroll-lock');
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
                        {this.state.isShown ? (
                            
                            <div>
                            <button
                                className='closeButton'
                                onClick={this.closeEditForm}
                            >
                                <span>
                                Close
                                </span>
                            </button>
                            <div className='form'>
                                <form onSubmit={this.onSubmit}>
                                    <div>
                                        <label htmlFor="title">Title</label>
                                        <input className='formTitle' id='title' placeholder={this.props.reduxState.singleMovieReducer.title}/>
                                    </div>
                                    <div>
                                        <label htmlFor='description'>Description</label>
                                        <textarea
                                        type='description'
                                        id='description'
                                        placeholder={this.props.reduxState.singleMovieReducer.description}
                                        />
                                    </div>
                                    <div>
                                        <button className='submitUpdate' type='submit'>
                                        Update
                                        </button>
                                    </div>
                                </form>
                            </div>
                            </div>  
                        
                        ) : null}

                        <div className='detailsTitle'>
                            <p className='detailsTitleText'>{this.props.reduxState.singleMovieReducer.title}</p>
                            <p className='detailsGenreText'>Genres:</p>
                                <ul className='detailsGenreText'>
                            {this.props.reduxState.genreReducer.map((y, key) => (
                                <li key={key}>{y.name}</li>
                            ))}
                                </ul>
                        </div>
                        <div className='detailsDescription'> 
                            <p className='detailsDescriptionText'>{this.props.reduxState.singleMovieReducer.description}</p>
                        </div>
                        <button id='editTrigger' onClick={this.showEditForm}>Edit</button>
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