/* jshint node: true */

var React = require( 'react' )
;

function formatIsoDateString( isoDateString ) {
  var date = new Date( isoDateString )
  ;

  return (
    date.getFullYear() + '.' + ( date.getMonth() + 1 ) + '.' + date.getDate()
  );
}

var BlogItem = React.createClass({
  render: function() {
    return (
      <div className='blog-item'>
        <h2 className='blog-item-title'>
          { this.props.title }
        </h2>
        <div className='blog-item-timestamp'>
          { formatIsoDateString( this.props.timestamp ) }
        </div>
        <div className='blog-item-text'>
          { this.props.text }
        </div>
      </div>
    );
  }
});

module.exports = BlogItem;
