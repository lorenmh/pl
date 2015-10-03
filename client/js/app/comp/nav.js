/* jshint node: true */

var React = require( 'react' ),
    Link = require( 'react-router' ).Link,
    ModalLink = require( '../modal/modal-link' )
;

// depends Link
var NavItem = React.createClass({
  render: function() {
    return (
      <li className="nav-item">
        <Link to={ this.props.linkTo }>
          <div className="nav-text">{ this.props.linkText }</div>
        </Link>
      </li>
    );
  }
});

var NavModal = React.createClass({
  render: function() {
    return (
      <li className="nav-item">
        <ModalLink modalId={ this.props.modalId }>
          <div className="nav-text">{ this.props.linkText }</div>
        </ModalLink>
      </li>
    );
  }
});

// depends NavItem
module.exports = React.createClass({
  render: function() {
    return (
      <div id="nav">
        <Link to="app" id="app-name-link">
          <span id="app-name">plutonium.io</span>
        </Link>
        <ul id="nav-items">
          <NavItem  linkTo="blog"
                    linkText="Blog" />
          <NavModal modalId="contact"
                    linkText="Contact" />
        </ul>
      </div>
    );
  }
});

