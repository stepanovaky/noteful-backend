module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL || process.env.HEROKU_POSTGRESQL_COPPER_URL || 'postgresql://katerina@localhost/noteful' ,
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://katerina@localhost/noteful-test'
  }

