var React = require( 'react' ),
    Modal = require( './modal' )
;

var Help = React.createClass({
  render: function() {
    return (
      <Modal>
        <h1>HELP!</h1>
      </Modal>
    );
  }
});

module.exports = Help;
