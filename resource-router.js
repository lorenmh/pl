var express = require( 'express' )
;

function resourceRouter( Model, path ) {
  var router = express.Router();
  
  router.route( path )
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

  return router;
}

module.exports = resourceRouter;
