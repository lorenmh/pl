var React = require( 'react' ),
    Router = require( 'react-router' ),
    HashLocation = Router.HashLocation,
    routes = require( './routes' ),
    Provider = require( 'react-redux' ).Provider,
    configureStore = require( './configure-store' ),
    store = configureStore()
;

var APP_SELECTOR = '#app';

Router.run( routes, HashLocation, function( Handler, routerState ) {
  React.render(
    (
      <Provider store={store}>
        { () => { return <Handler routerState={routerState}/>; } }
      </Provider>
    ),
    document.querySelector( APP_SELECTOR ) );
});

window.store = store;
