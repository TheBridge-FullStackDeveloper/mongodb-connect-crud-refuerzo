const User = require("../models/User.js")
const { fetchUsers } = require("../services/service.js")

const usersController = {
  async importUsers(req, res) {
    try {
      const usersFetch = await fetchUsers()

      for (const user of usersFetch) {
        await User.updateOne(
          { externalId: user.id },
          {
            external: user.id,
            name: user.name,
            email: user.email,
            city: user.address.city,
          },
          { upsert: true },
        )
      }

      res.status(201).json({ message: "Usuarios importados desde la API" })
    } catch (error) {
      res.status(500).json({ error: "Error al importar usuarios", error })
    }
  },

  async getUsers(req, res) {
    try {
      const users = await User.find()
      res.json({ total: users.length, users })
    } catch (error) {
      res.status(500).json({ error: "Error al obtener usuarios", error })
    }
  },

  async editUser(req, res) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        },
      )

      if (!updatedUser) {
        return res.status(404).send("Usuario no encontrado")
      }

      res.status(200).json(updatedUser)
    } catch (error) {
      res.status(404).send(err.message)
    }
  },

  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id)

      if (!deletedUser) {
        return res.status(404).send("Usuario no encontrado")
      }

      res.status(200).json({ message: "Usuario eliminado correctamente" })
    } catch (error) {
      res.status(500).send(error.message)
    }
  },
}

module.exports = usersController
