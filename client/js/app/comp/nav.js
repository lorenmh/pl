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
        <Link to={this.props.linkTo}>
          <div className="nav-text">{this.props.linkText}</div>
        </Link>
      </li>
    );
  }
});

var NavHelp = React.createClass({
  render: function() {
    return (
      <li className="nav-item">
        <ModalLink modalId="help">
          <div className="nav-text">{this.props.linkText}</div>
        </ModalLink>
      </li>
    );
  }
});

// depends NavItem
module.exports = React.createClass({
  render: function() {
    return (
      <div className="dir nav js-nav">
        <ul>
          <NavItem  linkTo="blog"
                    linkText="Blog" />
          <NavItem  linkTo="app"
                    linkText="Home" />
          <NavHelp  linkText="Help" />
        </ul>
      </div>
    );
  }
});

