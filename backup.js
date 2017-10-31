const Sequelize = require("sequelize")

// -----------------------------------------------------------------------------

const sequelize = new Sequelize("users", null, null, {
  dialect: "sqlite",
  storage: "socialmedia.db"
})

// -----------------------------------------------------------------------------

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.")
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err)
  })

// -----------------------------------------------------------------------------

const User = sequelize.define("user", {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  name: Sequelize.STRING,
  bio: Sequelize.STRING
})

// force: true will drop the table if it already exists
// User.sync({ force: true }).then(() => {
//   // Table created
//   return User.create({
//     username: "admin",
//     email: "admin@socialmedia.com",
//     password: "supersecret0",
//     name: "Administrator",
//     bio: "Superman"
//   })
// })

User.findAll().then(users => {
  console.log(users)
})
