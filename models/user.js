var Sequelize = require( 'sequelize' ),
    db = require( '../db' )
;

var User = db.define( 'user', {
  username: {
    type: Sequelize.STRING,
    field: 'username',
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  password: {
    type: Sequelize.STRING,
    field: 'password',
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

});

module.exports = User;
