var React = require( 'react' ),
    actions = require( '../actions' ),
    connect = require( 'react-redux' ).connect,
    BlogItem = require( '../comp/blog-item' )
;

var Blog = React.createClass({
  componentDidMount: function() {
    this.props.dispatch( actions.getBlogsIfNeeded() );
  },

  //componentWillReceiveProps
  render: function() {
    var dispatch = this.props.dispatch,
        blogs = ( this.props.blog && this.props.blog.items ) || []
    ;

    return (
      <div>
        {blogs.map( function( blog ) {
            return (
              <BlogItem
                timestamp={blog.createdAt}
                text={blog.text}
              />
            );
        })}
     </div>
    );
  }
});

module.exports = connect( function(state) { return state; } )( Blog );
