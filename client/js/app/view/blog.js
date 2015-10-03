var React = require( 'react' ),
    RouteHandler  = require( 'react-router' ).RouteHandler,
    actions = require( '../actions' ),
    connect = require( 'react-redux' ).connect,
    BlogItem = require( '../comp/blog-item' )
;

var BlogView = React.createClass({
  render: function() {
    return (
      <div id="blog">
        <RouteHandler />
      </div>
    );
  }
});

module.exports = connect( (state) => state )( BlogView );
