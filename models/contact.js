var Sequelize = require( 'sequelize' ),
    db = require( '../db' )
;

var Contact = db.define( 'contact', {
  name: {
    type: Sequelize.STRING,
    field: 'name',
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  email: {
    type: Sequelize.STRING,
    field: 'email',
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  message: {
    type: Sequelize.STRING,
    field: 'message',
    allowNull: true
  }
});

module.exports = Contact;
