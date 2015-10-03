/* jshint node: true */

var React = require( 'react' ),
    Markdown = require( 'react-remarkable' ),
    //rm = new require( 'remarkable' ),
    md = require( 'markdown' ).markdown
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
        title = props.title !== undefined ? props.title : '',
        timestamp = props.timestamp ? formatIsoDateString( props.timestamp ) : '',
        text = props.text !== undefined ? props.text : '',
        mdText = text.replace( '\n', '\r\n' )
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
          <Markdown source={ mdText } />
        </div>
      </div>
    );
  }
});

module.exports = BlogItem;
