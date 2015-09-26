var express = require( 'express' )
;

var GET = 'GET',
    POST = 'POST',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
;

function resourceRouter( Model, path, options ) {
  options = options || {} ;

  var methods = options.methods,
      key = options.key
  ;
  
  var router = express.Router();

  var pathStripped = path.replace( /\/$/, '' ),
      pathWithId = `${pathStripped}/:id`
  ;
  
  var getMethod = false,
      postMethod = false,
      patchMethod = false,
      deleteMethod = false
  ;

  // when making queries, we might want to query using a key other than id
  // if the option 'key' is defined, then we query using that key instead
  function query( resourceId ) {
    var q = {};
    
    if ( key === undefined ) {
      q[ 'id' ] = resourceId;
    } else {
      q[ key ] = resourceId;
    }

    return q;
  }

  if ( Array.isArray( methods ) ) {
    methods.forEach( (method) => {
      if ( method === GET ) {
        getMethod = true;
      } else if ( method === POST ) {
        postMethod = true;
      } else if ( method === PATCH ) {
        patchMethod = true;
      } else if ( method === DELETE ) {
        deleteMethod = true;
      }
    });
  } else if ( methods === undefined ) {
    getMethod = postMethod = patchMethod = deleteMethod = true;
  }
 
  var all = router.route( path ),
      one = router.route( pathWithId )
  ;

  if ( getMethod ) {
    all
      .get( (request, response) => {
        Model.findAll()
          .then( (instances) => {
            response.json( instances );
          })
          .catch( (error) => {
            response.send( error );
          })
        ;
      })
    ;

    one
      .get( (request, response) => {
        Model.findOne({ where: query( request.params.id ) })
          .then( (instance) => {
            if ( instance === null ) {
              response.sendStatus( 404 );
            } else {
              response.json( instance );
            }
          })
          .catch( (error) => {
            response.status( 400 ).send( error );
          })
        ;
      })
    ;
  }

  if ( postMethod ) {
    all
      .post( (request, response) => {
        Model.create( request.body )
          .then( (instance) => {
            response.json( instance );
          })
          .catch( (error) => {
            response.status( 400 ).send( error );
          })
        ;
      })
    ;
  }

  if ( patchMethod ) {
    one
      .patch( (request, response) => {
        Model.update( request.body, { where: query( request.params.id ) } )
          .then( (rows) => {
            if ( rows[ 0 ] === 0 ) {
              response.sendStatus( 404 );
            } else {
              response.sendStatus( 200 );
            }
          })
          .catch( (error) => {
            response.status( 400 ).send( error );
          })
        ;
      })
    ;
  }

  if ( deleteMethod ) {
    one
      .delete( (request, response) => {
        Model.destroy({ where: query( request.params.id ) })
          .then( (numRows) => {
            if ( numRows === 0 ) {
              response.sendStatus( 404 );
            } else {
              response.sendStatus( 200 );
            }
          })
          .catch( (error) => {
            response.status( 400 ).send( error );
          })
        ;
      })
    ;
  }

  return router;
}

module.exports = {
  router: resourceRouter,
  method: { GET, POST, PATCH, DELETE }
};
