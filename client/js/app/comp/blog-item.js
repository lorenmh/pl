/* jshint node: true */

var React = require( 'react' )
;

var BlogItem = React.createClass({
  render: function() {
    return (
      <div className="blog-item">
        <div className="blog-item-timestamp">
          {this.props.timestamp}
        </div>
        <div className="blog-item-text">
          {this.props.text}
        </div>
      </div>
    );
  }
});

module.exports = BlogItem;
