var express = require( 'express' ),
    app = express(),
    bodyParser = require( 'body-parser' ),
    db = require( './db' ),
    resource = require( './resource' ),
    User = require( './models/user' )
;

app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );


var port = 3000
;

app.use( resource.router( User, '/' ) );

db.sync()
  .then( () => {
    app.listen( port );
    console.log( `Listening on port ${port}` );
  })
  .catch( (error) => {
    console.log( `Error running db.sync: ${error}` );
  })
;

