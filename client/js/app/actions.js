var es6 = require( './shim' ),
    http = require( './http' )
;

module.exports.REQUEST_BLOG = 'REQUEST_BLOG';
module.exports.RECEIVE_BLOG = 'RECEIVE_BLOG';

module.exports.REQUEST_BLOG_TEASERS = 'REQUEST_BLOG_TEASERS';
module.exports.RECEIVE_BLOG_TEASERS = 'RECEIVE_BLOG_TEASERS';

module.exports.ACTIVATE_MODAL = 'ACTIVATE_MODAL';
module.exports.DEACTIVATE_MODAL = 'DEACTIVATE_MODAL';

var BLOG = 'blog',
    BLOG_TEASER = 'blog-teaser'
;

///////////////////////////////////////////////////////////////////////////////
// #BLOGS
///////////////////////////////////////////////////////////////////////////////
function requestBlog( slug ) {
  return {
    type: module.exports.REQUEST_BLOG,
    slug: slug
  };
}

function receiveBlog( slug, data ) {
  return {
    type: module.exports.RECEIVE_BLOG,
    slug: slug,
    data: data
  };
}

function shouldGetBlog( slug, state ) {
  return !state.blog || !state.blog[ slug ] ;
}

module.exports.getBlogIfNeeded = function( slug ) {
  return function( dispatch, getState ) {
    if ( shouldGetBlog( slug, getState() ) ) {
      return dispatch( module.exports.getBlog( slug ) );
    }
  };
};

module.exports.getBlog = function( slug ) {
  return function( dispatch ) {
    dispatch( requestBlog( slug ) );

    http.get( BLOG, slug ).then( function( data ) {
      dispatch( receiveBlog( slug, data ) );
    });
  };
};

///////////////////////////////////////////////////////////////////////////////
// #BLOGTEASERS
///////////////////////////////////////////////////////////////////////////////
function requestBlogTeasers() {
  return {
    type: module.exports.REQUEST_BLOG_TEASERS
  };
}

function receiveBlogTeasers( data ) {
  return {
    type: module.exports.RECEIVE_BLOG_TEASERS,
    data: data
  };
}

function shouldGetBlogTeasers( state ) {
  return !state.blogTeasers || !state.blogTeasers.items || !state.blogTeasers.items.length ;
}

module.exports.getBlogTeasersIfNeeded = function() {
  return function( dispatch, getState ) {
    if ( shouldGetBlogTeasers( getState() ) ) {
      return dispatch( module.exports.getBlogTeasers() );
    }
  };
};

module.exports.getBlogTeasers = function() {
  return function( dispatch ) {
    dispatch( requestBlogTeasers() );

    http.get( BLOG_TEASER ).then( function( data ) {
      dispatch( receiveBlogTeasers( data ) );
    });
  };
};

///////////////////////////////////////////////////////////////////////////////
// #MODAL
///////////////////////////////////////////////////////////////////////////////
module.exports.activateModal = function( id ) {
  return {
    type: module.exports.ACTIVATE_MODAL,
    id: id
  };
};

module.exports.deactivateModal = function() {
  return {
    type: module.exports.DEACTIVATE_MODAL
  };
};
