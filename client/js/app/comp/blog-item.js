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
    var props = this.props,
        title = props.title === undefined ? '' : props.title,
        timestamp = formatIsoDateString( props.timestamp ),
        text = props.text === undefined ? '' : props.text
    ;

    return (
      <div className='blog-item'>
        <h2 className='blog-item-title'>
          { title }
        </h2>
        <div className='blog-item-timestamp'>
          { timestamp }
        </div>
        <div className='blog-item-text'>
          { text }
        </div>
      </div>
    );
  }
});

module.exports = BlogItem;
