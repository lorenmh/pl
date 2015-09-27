var React         = require( 'react' ),
    Router        = require( 'react-router' ),
    Route         = Router.Route,
    DefaultRoute  = Router.DefaultRoute,
    Redirect      = Router.Redirect,
    NotFoundRoute = Router.NotFoundRoute,
    
    // views
    App       = require( './view/app' ),
    Home      = require( './view/home' ), 
    Blog      = require( './view/blog' ),
    NotFound  = require( './view/not-found' )
;

module.exports = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Home} />
    <Route name="blog" path="blog" handler={Blog} />
    <Redirect from="/*/" to="/*" />
    <NotFoundRoute handler={NotFound} />
  </Route>
);
