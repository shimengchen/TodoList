import {createStore,applyMiddleware,compose} from 'redux';
import reducer from './reducer';
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import todoSaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

    const enhancer = composeEnhancers(
        // applyMiddleware(thunk),
        applyMiddleware(sagaMiddleware)
      );
const store=createStore(
    reducer,
    enhancer
    );
// then run the saga
sagaMiddleware.run(todoSaga)

export default store;