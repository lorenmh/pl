var React = require( 'react' );

var MODALS = {
  'contact': require( './contact' )
};


var ModalProvider = React.createClass({
  render: function() {
    var Modal = MODALS[ this.props.modalId ];
    if ( Modal ) {
      return <Modal />;
    }
    return <span />;
  }
});

module.exports = ModalProvider;
