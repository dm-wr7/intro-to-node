const express = require('express')
const usersCtrl = require('./usersController')
const app = express()

app.get('/', (req, res) => {
  res.send('THE HOMEPAGE')
})

app.get('/test', (req, res) => {
  res.status(200).send('HELLO THERE FRIEND')
})

app.get('/reject', (req, res) => {
  res.status(404).send('I DO NOT HAVE THAT')
})

app.get('/api/users', usersCtrl.getAllUsers)
app.get('/api/users/:user_id', usersCtrl.getSingleUser)

app.listen(4554, () => console.log('Server listening on port 4554'))

/*
axios.get('/api/users').then(res => {
  this.setState({
    messages: res.data
  })
}).catch(err => {
  //handle the err however
})
*/
