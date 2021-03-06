const express = require("express")
const cors = require("cors")
const app = express()

let corsOptions = {
    origin: "http://localhost:8081"
}
app.use(cors(corsOptions))

app.use(express.json())

const db = require("./app/models");
db.sequelize.sync()
const Role = db.role;
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "moderator"
    });
   
    Role.create({
      id: 3,
      name: "admin"
    });
  }

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.json({ message: "Welcome to breda application"})
})

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});