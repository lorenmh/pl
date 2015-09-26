var Sequelize = require( 'sequelize' ),
    db = require( '../db' )
;

var Blog = db.define( 'blog', {
  title: {
    type: Sequelize.STRING,
    field: 'title',
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  
  text: {
    type: Sequelize.STRING,
    field: 'text',
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  slug: {
    type: Sequelize.STRING,
    field: 'slug',
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
});

module.exports = Blog;
