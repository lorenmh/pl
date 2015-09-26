var Sequelize = require( 'sequelize' ),
    config = require( './conf/db.json' )
;

var database = config.database,
    username = config.username,
    password = config.password,
    host = config.host,
    dialect = config.dialect
;

module.exports = new Sequelize(
  database,
  username,
  password,
  { host, dialect }
);
