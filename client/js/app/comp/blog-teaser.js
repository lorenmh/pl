/* jshint node: true */

var React = require( 'react' ),
    Link = require( 'react-router' ).Link
;

function formatIsoDateString( isoDateString ) {
  var date = new Date( isoDateString )
  ;

  return (
    date.getFullYear() + '.' + ( date.getMonth() + 1 ) + '.' + date.getDate()
  );
}

var BlogTeaser = React.createClass({
  render: function() {
    var props = this.props,
        slug = props.slug !== undefined ? props.slug : '',
        title = props.title !== undefined ? props.title : '',
        timestamp = formatIsoDateString( props.timestamp )
    ;

    return (
      <div className='blog-teaser'>
        <Link to={ `/blog/${slug}` }>
          <span className='blog-teaser-title'>
            { title }
          </span>
          <span className='blog-teaser-timestamp'>
            { timestamp }
          </span>
        </Link>
      </div>
    );
  }
});

module.exports = BlogTeaser;
