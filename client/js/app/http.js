var es6 = require( './shim' )
;

var BASE_API_PATH = '/api/'
;

function toApiPath( resource, id ) {
  var path = BASE_API_PATH + resource + '/';

  if ( id !== undefined ) {
    path += id + '/';
  }

  return path;
}

function logRequest( xhr ) {
  console.log( 'HttpRequest', xhr );
}

function logResponse( xhr ) {
  console.log( 'HttpResponse', xhr );
}

function logResponseError( xhr ) {
  console.log( 'HttpError', xhr );
}

module.exports = {
  get: function( resource, id ) {
    return new es6.Promise( function( res, rej ) {
      var path = toApiPath( resource, id ),
          xhr = new XMLHttpRequest()
      ;

      xhr.open( 'GET', path, true );

      xhr.send();

      logRequest( xhr );

      xhr.onload = function() {
        var data = JSON.parse( xhr.responseText ),
            statusPrefix = Math.floor( xhr.status / 100 ); // 200, 404, etc.

        if ( statusPrefix === 2 ) {
          logResponse( xhr );
          res( data );
        } else {
          logResponseError( xhr );
          rej( xhr );
        }
      };
    });
  },

  post: function post( resource, id, data ) {
    return new es6.Promise( function( res, rej ) {
      var path = toApiPath( resource, id ),
          xhr = new XMLHttpRequest()
      ;

      xhr.open( 'POST', path, true );

      xhr.setRequestHeader(
        'Content-Type',
        'application/json; charset=UTF-8'
      );

      xhr.send( JSON.stringify( data ) );
      
      logRequest( xhr );

      xhr.onload = function() {
        var data = JSON.parse( xhr.responseText ),
            statusPrefix = Math.floor( xhr.status / 100 ); // 200, 404, etc.

        if ( statusPrefix === 2 ) {
          logResponse( xhr );
          res( data );
        } else {
          logResponseError( xhr );
          rej( xhr );
        }
      };
    });
  },

  patch: function( resource, id, data ) {
    return new es6.Promise( function( res, rej ) {
      var path = toApiPath( resource, id ),
          xhr = new XMLHttpRequest()
      ;

      xhr.open( 'PATCH', path, true );

      xhr.setRequestHeader(
        'Content-Type',
        'application/json; charset=UTF-8'
      );

      xhr.send( JSON.stringify( data ) );
      
      logRequest( xhr );

      xhr.onload = function() {
        var data = JSON.parse( xhr.responseText ),
            statusPrefix = Math.floor( xhr.status / 100 ); // 200, 404, etc.

        if ( statusPrefix === 2 ) {
          logResponse( xhr );
          res( data );
        } else {
          logResponseError( xhr );
          rej( xhr );
        }
      };
    });
  },

  delete: function( resource, id, data ) {
    return new es6.Promise( function( res, rej ) {
      var path = toApiPath( resource, id ),
          xhr = new XMLHttpRequest()
      ;

      xhr.open( 'DELETE', path, true );

      xhr.setRequestHeader(
        'Content-Type',
        'application/json; charset=UTF-8'
      );

      xhr.send();
      
      logRequest( xhr );

      xhr.onload = function() {
        var data = JSON.parse( xhr.responseText ),
            statusPrefix = Math.floor( xhr.status / 100 ); // 200, 404, etc.

        if ( statusPrefix === 2 ) {
          logResponse( xhr );
          res( data );
        } else {
          logResponseError( xhr );
          rej( xhr );
        }
      };
    });
  }
};
