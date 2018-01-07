const User = require('../db/User.json')
const file = './db/User.json'
const fs = require('fs');

const welcomePage = (req, res) => {
  res.json({
    msg: 'User endpoint',
    ver: '1.0.0'
  })
}

const addUser = (req, res) => {
  User.user.push(req.body)
  const newUser = JSON.stringify(User)
  fs.writeFile(file, newUser, 'utf8', (err) => {
    if (err) res.status(500).send({
      msg: 'cannot add new user',
      err: err
    })
    else {
      res.json({
        msg: 'OK',
        newUser: req.body
      })
    }
  })
}

const getUsers = (req, res) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) res.status(500).send({
      msg: 'cannot read users',
      err: err
    })
    else {
      res.json({
        msg: 'OK',
        users: JSON.parse(data)
      })
    }
  })
}

const getUser = (req, res) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) res.status(500).send({
      msg: 'cannot get user',
      err: err
    })
    else {
      const user = JSON.parse(data).user[+req.params.id -1]
      res.json({
        msg: 'OK',
        user: user
      })
    }
  })
}

const editUser = (req, res) => {
  User.user.splice(+req.params.id - 1, 1, req.body)
  const newUser = JSON.stringify(User)
  fs.writeFile(file, newUser, 'utf8', (err) => {
    if (err) res.status(500).send({
      msg: 'cannot edit user',
      err: err
    })
    else {
      res.json({
        msg: 'OK',
        newUser: req.body
      })
    }
  })
}

const deleteUser = (req, res) => {
  User.user.splice(+req.params.id - 1, 1)
  const newUser = JSON.stringify(User)
  fs.writeFile(file, newUser, 'utf8', (err) => {
    if (err) res.status(500).send({
      msg: 'cannot delete user',
      err: err
    })
    else {
      res.json({
        msg: 'OK'
      })
    }
  })
}

module.exports = {
  welcomePage,
  addUser,
  getUsers,
  getUser,
  editUser,
  deleteUser
};
