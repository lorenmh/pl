var React = require( 'react' ),
    actions = require( '../actions' ),
    connect = require( 'react-redux' ).connect,
    BlogTeaser = require( '../comp/blog-teaser' )
;

var BlogTeasers = React.createClass({
  componentDidMount: function() {
    this.props.dispatch( actions.getBlogTeasersIfNeeded() );
  },

  componentWillReceiveProps: function() {
  },

  //componentWillReceiveProps
  render: function() {
    var dispatch = this.props.dispatch,
        blogItems = ( this.props.blogTeasers && this.props.blogTeasers.items ) || []
    ;

    return (
      <div className='blog-teasers'>
        { blogItems.map( function( blogItem ) {
            return (
              <BlogTeaser
                title={ blogItem.title }
                slug={ blogItem.slug }
                timestamp={ blogItem.createdAt }
              />
            );
        }) }
     </div>
    );
  }
});

module.exports = connect( (state) => state )( BlogTeasers );
