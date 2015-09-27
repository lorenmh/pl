var Redux = require( 'redux' ),
    actions = require( './actions' ),
    es6 = require( './shim' )
;

function initialStateBlog() {
  return {
    pendingRequest: false,
    hasHadData: false,
    items: []
  };
}

function blog( state, action ) {
  if ( state === undefined ) {
    state = initialStateBlog();
  }

  switch ( action.type ) {
    case actions.REQUEST_BLOGS:
      return es6.assign({}, state, {
        pendingRequest: true
      });
    case actions.RECEIVE_BLOGS:
      return es6.assign({}, state, {
        pendingRequest: false,
        hasHadData: true,
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
    blogs: initialStateBlog(),
    modal: initialStateModal()
  };
}

function app( state, action ) {
  if ( state === undefined ) {
    state = initialStateApp();
  }

  switch ( action.type ) {
    case actions.REQUEST_BLOGS:
    case actions.RECEIVE_BLOGS:
      return es6.assign({}, state, {
        blog: blog( state.blogs, action )
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