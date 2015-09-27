var es6 = require( './shim' ),
    http = require( './http' )
;

module.exports.REQUEST_BLOGS = 'REQUEST_BLOGS';
module.exports.RECEIVE_BLOGS = 'RECEIVE_BLOGS';

module.exports.ACTIVATE_MODAL = 'ACTIVATE_MODAL';
module.exports.DEACTIVATE_MODAL = 'DEACTIVATE_MODAL';

var BLOG = 'blog'
;

///////////////////////////////////////////////////////////////////////////////
// #BLOGS
///////////////////////////////////////////////////////////////////////////////
function requestBlogs() {
  return {
    type: module.exports.REQUEST_BLOGS
  };
}

function receiveBlogs( data ) {
  return {
    type: module.exports.RECEIVE_BLOGS,
    data: data
  };
}

function shouldGetBlogs( state ) {
  return !state.blog || !state.blog.hasHadData;
}

module.exports.getBlogsIfNeeded = function() {
  return function( dispatch, getState ) {
    if ( shouldGetBlogs( getState() ) ) {
      return dispatch( module.exports.getBlogs() );
    }
  };
};

module.exports.getBlogs = function() {
  return function( dispatch ) {
    dispatch( requestBlogs() );

    http.get( BLOG ).then( function( data ) {
      dispatch( receiveBlogs( data ) );
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
