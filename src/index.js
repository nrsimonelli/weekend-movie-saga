import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIE', getMovieSaga);
    yield takeEvery('FETCH_GENRE', getGenreSaga);
    yield takeEvery('FETCH_SINGLE', getSingleSaga);
}

function* getMovieSaga() {
    console.log('in getMovieSaga');
    try{
        const response = yield axios.get('/movies');
        yield put({ type: 'SET_MOVIE', payload: response.data });
    } catch(err){
        console.log(err);
    }
}
function* getSingleSaga(action) {
    console.log('in getSingleSaga');
    console.log('this.action.payload');
    
    try{
        const response = yield axios.get(`/movies/${action.payload}`);
        yield put({ type: 'SET_SINGLE', payload: response.data });
    } catch(err){
        console.log(err);
    }
}
function* getGenreSaga(action) {
    console.log('in getGenreSaga');
    try{
        const response = yield axios.get(`/genres/${action.payload}`);
        yield put ({type: 'SET_GENRE', payload: response.data });
    }catch(err){
        console.log(err);
        
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movieReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIE':
            console.log('action.payload = ', action.payload);
            return action.payload;
        default:
            return state;
    }
}
const singleMovieReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SINGLE':
            console.log('action.payload = ', action.payload);
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genreReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRE':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movieReducer,
        genreReducer,
        singleMovieReducer
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
