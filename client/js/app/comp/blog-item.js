/* jshint node: true */

var React = require( 'react' )
;

var BlogItem = React.createClass({
  render: function() {
    return (
      <div className="dir blog">
        <div className="blog-timestamp">
          {this.props.timestamp}
        </div>
        <div className="blog-text-container">
          <div className="blog-text">
            {this.props.text}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = BlogItem;
