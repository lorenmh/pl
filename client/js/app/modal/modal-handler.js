var React             = require( 'react/addons' ),
    TransitionGroup   = React.addons.CSSTransitionGroup,
    connect           = require( 'react-redux' ).connect,
    actions           = require( '../actions' ),
    ModalProvider     = require( './modal-provider' )
;

var OVERLAY_KEY = 'OVERLAY',
    MODAL_KEY = 'MODAL',
    OVERLAY_NULL = 'OVERLAY_NULL',
    MODAL_NULL = 'MODAL_NULL'
;

var ModalHandler = React.createClass({
  handleOverlayClick: function() {
    console.log('ayyy')
    this.props.dispatch( actions.deactivateModal() );
  },

  render: function() {
    var modal = this.props.modal || {}
    ;

    return (
      <TransitionGroup
          className="modal-overlay-animation-wrap"
          transitionName="overlay">
        <div
            className={ modal.activated ? 'modal-overlay' : 'modal-overlay-hidden' }
            key={ modal.activated ? OVERLAY_KEY : OVERLAY_NULL }
            onClick={ this.handleOverlayClick }
        >
          <ModalProvider
              className={ modal.activated ? 'modal' : 'modal-hidden' }
              modalId={ modal.id }
          />
        </div>
      </TransitionGroup>
    );
  }
});

module.exports = connect( function( state ) { return state; } )( ModalHandler );
