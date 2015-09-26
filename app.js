var express = require( 'express' ),
    app = express(),
    bodyParser = require( 'body-parser' ),
    db = require( './db' ),
    User = require( './models/user' )
;

app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );

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

var port = 3000
;

app.use( resourceRouter( User, '/' ) );

db.sync()
  .then( () => {
    app.listen( port );
    console.log( `Listening on port ${port}` );
  })
  .catch( (error) => {
    console.log( `Error running db.sync: ${error}` );
  })
;

