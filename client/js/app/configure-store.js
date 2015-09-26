var Redux             = require( 'redux' ),
    createStore       = Redux.createStore,
    applyMiddleware   = Redux.applyMiddleware,
    thunkMiddleware   = require( 'redux-thunk' ),
    promiseMid        = require( 'redux-promise' ),
    loggerMiddleware  = require( 'redux-logger' ),
    rootReducer       = require( './reducers' )
;

var createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promiseMid,
  loggerMiddleware
)( createStore );

module.exports = function( initialState ) {
  return createStoreWithMiddleware( rootReducer, initialState );
};
