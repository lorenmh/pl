var Redux = require( 'redux' ),
    actions = require( './actions' ),
    es6 = require( './shim' )
;

function initialStateBlog() {
  return {};
}

function blog( state, action ) {
  if ( state === undefined ) {
    state = initialStateBlog();
  }

  switch ( action.type ) {
    case actions.RECEIVE_BLOG:
      var newStateData = {};
      newStateData[ action.slug ] = action.data;
      return es6.assign( {}, state, newStateData );
    default:
      return state;
  }
}

function initialStateBlogTeasers() {
  return {
    items: []
  };
}

function blogTeasers( state, action ) {
  if ( state === undefined ) {
    state = initialStateBlogTeasers();
  }

  switch ( action.type ) {
    case actions.RECEIVE_BLOG_TEASERS:
      return es6.assign( {}, state, {
        items: action.data
      });
    default:
      return state;
  }
}


function initialStateModal() {
  return {
    activated: false,
    id: null
  };
}

function modal( state, action ) {
  if ( state === undefined ) {
    state = initialStateModal();
  }

  switch ( action.type ) {
    case actions.ACTIVATE_MODAL:
      return es6.assign({}, state, {
        activated: true,
        id: action.id
      });
    case actions.DEACTIVATE_MODAL:
      return es6.assign({}, state, {
        activated: false,
        id: null
      });
    default:
      return state;
  }
}

function initialStateApp() {
  return {
    blog: initialStateBlog(),
    blogTeasers: initialStateBlogTeasers(),
    modal: initialStateModal()
  };
}

function app( state, action ) {
  if ( state === undefined ) {
    state = initialStateApp();
  }

  switch ( action.type ) {
    case actions.RECEIVE_BLOG:
      return es6.assign({}, state, {
        blog: blog( state.blog, action )
      });
    case actions.RECEIVE_BLOG_TEASERS:
      return es6.assign({}, state, {
        blogTeasers: blogTeasers( state.blogTeasers, action )
      });
    case actions.ACTIVATE_MODAL:
    case actions.DEACTIVATE_MODAL:
      return es6.assign({}, state, {
        modal: modal( state.modal, action )
      });
    default:
      return state;
  }
}

module.exports = app;
