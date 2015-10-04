/* jshint node: true */

var React = require( 'react' ),
    Markdown = require( 'react-remarkable' )
;

function formatIsoDateString( isoDateString ) {
  var date = new Date( isoDateString )
  ;

  return (
    date.getFullYear() + '.' + ( date.getMonth() + 1 ) + '.' + date.getDate()
  );
}

var BlogItem = React.createClass({
  prettify: function() {
    var codeEls = React.findDOMNode( this ).querySelectorAll( 'pre > code' );
    
    if ( !codeEls ) { return; }

    Array.prototype.slice.call( codeEls )
      .forEach( function( codeEl ) {
        window.hljs.highlightBlock( codeEl );
      })
    ;
  },

  componentDidMount: function() {
    this.prettify();
  },

  componentDidUpdate: function() {
    this.prettify();
  },

  render: function() {
    var props = this.props,
        title = props.title !== undefined ? props.title : '',
        timestamp = props.timestamp ? formatIsoDateString( props.timestamp ) : '',
        text = props.text !== undefined ? props.text : '',
        mdText = text.replace( '\n', '\r\n' )
    ;

    return (
      <div className='blog-item'>
        <h1 className='blog-item-title'>
          { title }
        </h1>
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
