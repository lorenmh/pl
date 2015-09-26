module.exports = {
  Promise: window.Promise || require( 'es6-promise' ).Promise,
  assign: ( Object.assign && Object.assign.bind( Object ) ) ||
            require( 'object-assign' )
};
