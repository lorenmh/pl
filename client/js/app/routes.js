var React         = require( 'react' ),
    Router        = require( 'react-router' ),
    Route         = Router.Route,
    Redirect      = Router.Redirect,
    NotFoundRoute = Router.NotFoundRoute,
    
    // views
    App       = require( './view/app' ),
    Blog      = require( './view/blog' ),
    NotFound  = require( './view/not-found' )
;

module.exports = (
  <Route name="app" path="/" handler={App}>
    <Route name="blog" path="blog" handler={Blog} />
    <Redirect from="/*/" to="/*" />
    <NotFoundRoute handler={NotFound} />
  </Route>
);
