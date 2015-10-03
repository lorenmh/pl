var db = require( '../db' ),
    promisify = require( 'promisify-node' ),
    Blog = require( '../models/blog' ),
    fs = promisify( 'fs' ),
    blogFile = process.env.blog,
    slug = process.env.slug,
    title = process.env.title
;

if ( !blogFile || !slug || !title ) {
  throw new Error( 'Need env variables blog, slug, title' );
}

fs.readFile( `./blogs/${blogFile}`, 'utf8' )
  .then( (blog) => {
    console.log( blog );
    db.sync()
      .then( () => {
        Blog
          .create({
            text: blog,
            title: title,
            slug: slug
          })
          .then( (instance) => {
            console.log( 'Created successfully' );
            process.exit( 0 );
          })
          .catch( (error) => {
            console.error( error );
            process.exit( 1 );
          })
        ;
      })
      .catch( (error) => {
        console.log( `Error running db.sync: ${error}` );
        process.exit( 1 );
      })
    ;
  })
  .catch( (error) => {
    console.log( `Error reading file: ${error}` );
    process.exit( 1 );
  })
;