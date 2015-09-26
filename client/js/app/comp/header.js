/* jshint node: true */

var React = require( 'react' ),
    connect = require( 'react-redux' ).connect,
    actions = require( '../actions' )
;

var HeaderMenu = React.createClass({
  render: function() {
    return (
      <div className="foo" />
    );
  }
});


// depends HeaderMenu
var Header = React.createClass({
  componentWillMount: function() {
  },

  render: function() {
    return (
      <div className="dir header">
      </div>
    );
  }
});

module.exports = connect( function( state ) { return state; } )( Header );
