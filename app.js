var express = require( 'express' ),
    app = express(),
    bodyParser = require( 'body-parser' ),
    db = require( './db' ),
    resource = require( './resource' ),
    Contact = require( './models/contact' ),
    Blog = require( './models/blog' )
;

app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );


var port = 3000
;

var apiRoutes = [
  resource.router( Contact, '/contact', {
    methods: [ resource.method.POST ]
  }),
  resource.router( Blog, '/blog', {
    methods: [ resource.method.GET ],
    key: 'slug'
  })
];

apiRoutes.forEach( (router) => {
  app.use( '/api', router );
});

db.sync()
  .then( () => {
    app.listen( port );
    console.log( `Listening on port ${port}` );
  })
  .catch( (error) => {
    console.log( `Error running db.sync: ${error}` );
  })
;
