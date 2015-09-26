var React         = require( 'react' ),
    RouteHandler  = require( 'react-router' ).RouteHandler,
    Header        = require( '../comp/header' ),
    Nav           = require( '../comp/nav' ),
    ModalHandler  = require( '../modal/modal-handler.js' )
;

// depends Header, Nav
var App = React.createClass({
  render: function() {
    return(
      <div id="wrapper" className="view">
        <Header />
        <div id="main">
          <Nav />
          <div id="content">
            <RouteHandler />
          </div>
        </div>
        <ModalHandler /> 
      </div>
    );
   }
});

module.exports = App; 
