var React = require( 'react' ),
    actions = require( '../actions' ),
    connect = require( 'react-redux' ).connect,
    BlogItem = require( '../comp/blog-item' )
;

var Blog = React.createClass({
  componentDidMount: function() {
    this.props.dispatch( actions.getBlogsIfNeeded() );
  },

  componentWillReceiveProps: function() {
  },

  //componentWillReceiveProps
  render: function() {
    var dispatch = this.props.dispatch,
        blogItems = ( this.props.blog && this.props.blog.items ) || []
    ;

    return (
      <div className='blog-items'>
        { blogItems.map( function( blogItem ) {
            return (
              <BlogItem
                timestamp={ blogItem.createdAt }
                title={ blogItem.title }
                text={ blogItem.text }
              />
            );
        }) }
     </div>
    );
  }
});

module.exports = connect( (state) => state )( Blog );
