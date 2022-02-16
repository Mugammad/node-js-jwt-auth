module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "mu9@mm@dMYSQL",
    DB: "testdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };