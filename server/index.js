const express = require('express')
const usersCtrl = require('./usersController')
const app = express()

app.use(express.json())

app.get('/api/users', usersCtrl.getAllUsers)
app.get('/api/users/:user_id', usersCtrl.getSingleUser)
app.post('/api/users', usersCtrl.addUser)
app.put('/api/users/:user_id', usersCtrl.editUser)
app.delete('/api/users/:user_id', usersCtrl.deleteUser)

app.listen(4554, () => console.log('Server listening on port 4554'))

/*
axios.get('/api/users').then(res => {≠
  this.setState({
    messages: res.data
  })
}).catch(err => {
  //handle the err however
})
*/

app.get('/', (req, res) => {
  res.send('THE HOMEPAGE')
})

app.get('/test', (req, res) => {
  res.status(200).send('HELLO THERE FRIEND')
})

app.get('/reject', (req, res) => {
  res.status(404).send('I DO NOT HAVE THAT')
})
