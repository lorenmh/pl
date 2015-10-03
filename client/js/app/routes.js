var React         = require( 'react' ),
    Router        = require( 'react-router' ),
    Route         = Router.Route,
    DefaultRoute  = Router.DefaultRoute,
    Redirect      = Router.Redirect,
    NotFoundRoute = Router.NotFoundRoute,
    
    // views
    App       = require( './view/app' ),
    Home      = require( './view/home' ), 
    About     = require( './view/about' ), 
    Blog      = require( './view/blog' ),
    BlogView  = require( './view/blog-view' ),
    BlogTeasers = require( './view/blog-teasers' ),
    NotFound  = require( './view/not-found' )
;

module.exports = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Home} />
    <Route name="about" path="about" handler={About} />
    <Route name="blog" path="blog" handler={Blog}>
      <DefaultRoute handler={BlogTeasers} />
      <Route path='/blog/:slug' handler={BlogView} />
    </Route>
    <Redirect from="/*/" to="/*" />
    <NotFoundRoute handler={NotFound} />
  </Route>
);
