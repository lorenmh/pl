var React = require( 'react' ),
    actions = require( '../actions' ),
    connect = require( 'react-redux' ).connect,
    BlogItem = require( '../comp/blog-item' )
;

var BlogView = React.createClass({
  componentDidMount: function() {
    if ( this.props.params.slug === undefined ) { return; }
    this.props.dispatch( actions.getBlogIfNeeded( this.props.params.slug ) );
  },

  componentWillReceiveProps: function() {
  },

  //componentWillReceiveProps
  render: function() {
    var blogItem;
    try {
      blogItem = this.props.blog[ this.props.params.slug ];
    } catch(e) {}
    blogItem = blogItem || {} ;
      

    return (
      <BlogItem
        title={ blogItem.title }
        timestamp={ blogItem.createdAt }
        text={ blogItem.text }
      />
    );
  }
});

module.exports = connect( (state) => state )( BlogView );
