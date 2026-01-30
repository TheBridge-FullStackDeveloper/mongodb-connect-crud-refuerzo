const express = require("express")
const app = express()
const dbConnection = require("./db/db.js")
const usersRouter = require("./routes/users.js")

const PORT = 3001

app.use(express.json())
app.use("/users", usersRouter)

dbConnection()

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
