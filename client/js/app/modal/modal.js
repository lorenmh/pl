var React = require( 'react' )
;

var Modal = React.createClass({
  handleModalClick: function(e) {
    console.log( 'clicked' );
    e.stopPropagation();
  },

  render: function() {
    return (
      <div
          onClick={ this.handleModalClick }
          className="modal"
      >
        <h1>Modal</h1>
        { this.props.children }
      </div>
    );
  }
});

module.exports = Modal;
