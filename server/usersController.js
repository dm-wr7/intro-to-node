const users = require('../data.json')

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
    const { user_id } = req.params

    const user = users.find((element) => element.id === +user_id)

    if (user) {
      res.status(200).send(user)
    } else {
      res.status(404).send('User does not exist')
    }
  },
}
