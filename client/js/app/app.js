var React = require( 'react' ),
    Router = require( 'react-router' ),
    HashLocation = Router.HashLocation,
    HistoryLocation = Router.HistoryLocation,
    routes = require( './routes' ),
    Provider = require( 'react-redux' ).Provider,
    configureStore = require( './configure-store' ),
    store = configureStore(),
    viz = require( './viz' )
;

var APP_SELECTOR = '#app',
    LOCATION = HistoryLocation
;

Router.run( routes, LOCATION, function( Handler, routerState ) {
  React.render(
    (
      <Provider store={store}>
        { () => { return <Handler routerState={routerState}/>; } }
      </Provider>
    ),
    document.querySelector( APP_SELECTOR ) );
});

viz( document.body );