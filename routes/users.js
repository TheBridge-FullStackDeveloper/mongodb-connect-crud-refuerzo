const express = require("express")
const router = express.Router()
const usersController = require("../controllers/usersController.js")

router.post("/import", usersController.importUsers)
router.get("/", usersController.getUsers)
router.put("/:id", usersController.editUser)
router.delete("/:id", usersController.deleteUser)

module.exports = router
