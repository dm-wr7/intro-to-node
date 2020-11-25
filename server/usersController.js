const users = require('../data.json')
let id = users[users.length - 1].id + 1

module.exports = {
  getAllUsers: (req, res) => {
    const { email } = req.query

    if (!email) {
      res.status(200).send(users)
    } else {
      const filteredUsers = users.filter((element) =>
        element.email.includes(email)
      )

      res.status(200).send(filteredUsers)
    }
  },
  getSingleUser: (req, res) => {
    //req.params.user_id
    const { user_id } = req.params

    const user = users.find((element) => element.id === +user_id)

    if (user) {
      res.status(200).send(user)
    } else {
      res.status(404).send('User does not exist')
    }
  },
  addUser: (req, res) => {
    const { first_name, last_name, email } = req.body

    const newUser = {
      id,
      first_name,
      last_name,
      email,
    }

    users.push(newUser)

    id++

    res.status(200).send(users)
  },
  editUser: (req, res) => {
    const { user_id } = req.params
    const { first_name, last_name, email } = req.body

    const index = users.findIndex((element) => element.id === +user_id)

    if (index === -1) {
      return res.status(404).send('User does not exist')
    }

    const existingUser = users[index]

    users[index] = {
      id: existingUser.id,
      first_name: first_name || existingUser.first_name,
      last_name: last_name || existingUser.last_name,
      email: email || existingUser.email,
    }

    res.status(200).send(users)
  },
  deleteUser: (req, res) => {
    const { user_id } = req.params

    const index = users.findIndex((element) => element.id === +user_id)

    if (index === -1) {
      return res.status(404).send('User does not exist')
    }

    users.splice(index, 1)

    res.status(200).send(users)
  },
}
