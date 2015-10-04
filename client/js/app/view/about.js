var React = require( 'react' ),
    Markdown = require( 'react-remarkable' )
;

var aboutMarkdownString = (
  'Hi there, I\'m Loren Howard.\n\n  ' +
  'I\'m a Software Developer living in San Francisco, working at [hiQ Labs](https://hiqlabs.com/) where we\'re building tools that use data science to elevate HR.\n\n  ' +
  'The back-end of this website was made using [PostgreSQL](http://www.postgresql.org/), [Sequelize](http://docs.sequelizejs.com/), and [ExpressJS](http://expressjs.com/).\n\n  ' +
  'The front-end of this website was made using [Redux](https://github.com/rackt/redux), [React](https://facebook.github.io/react/), [react-redux](https://github.com/rackt/react-redux), and [react-router](https://github.com/rackt/react-router).\n\n  ' +
  'The background animation was made using vanilla JavaScript with a 2D canvas.'
);

//depends Header, Nav
var About = React.createClass({
  render: function() {
    return (
      <div className='pad-content'>
        <Markdown source={ aboutMarkdownString } />
      </div>
    );
  }
});

module.exports = About;