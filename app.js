var express = require( 'express' ),
    app = express(),
    path = require( 'path' ),
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
    key: 'slug',
    attributes: [ 'slug', 'title', 'text', 'createdAt' ]
  }),
  
  resource.router( Blog, '/blog-teaser', {
    methods: [ resource.method.GET ],
    key: 'slug',
    attributes: [ 'slug', 'title', 'createdAt' ]
  })
];

apiRoutes.forEach( (router) => {
  app.use( '/api', router );
});

app.use( express.static( './public' ) );

app.get( '/favicon.ico', (request, response) => {
  //return response.sendFile( path.join( __dirname, '' ) );
  response.end();
});

app.get( '/*', (request, response) => {
  return response.sendFile( path.join( __dirname, 'templates/index.html' ) );
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
