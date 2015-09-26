var React = require( 'react' ),
    connect = require( 'react-redux' ).connect,
    actions = require( '../actions' )
;

var ModalLink = React.createClass({
  render: function() {
    var dispatch = this.props.dispatch,
        modalId = this.props.modalId
    ;

    return (
      <a onClick={function() {
        dispatch( actions.activateModal( modalId ) );
      }}>
        {this.props.children}
      </a>
    );
  }
});

module.exports = connect()( ModalLink );
