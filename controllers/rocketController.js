const Model = require('../models');

const welcomePage = (req, res) => {
  res.json({
    msg: 'Rocket endpoint',
    ver: '1.0.0'
  })
}

const addRocket = (req, res) => {
  let dataInsert = {
    name: req.body.name,
    img: req.body.img,
    desc: req.body.desc,
    price: req.body.price
  }
  Model.Rocket.create(dataInsert)
  .then(() => {
    res.json({
      msg: 'OK',
      newRocket: dataInsert
    })
  })
  .catch(err => {
    res.send(500).send({
      msg: 'cannot post new rocket',
      err: err
    })
  })
}

const getRockets = (req, res) => {
  Model.Rocket.findAll()
  .then(rockets => {
    res.json({
      msg: 'OK',
      rockets: rockets
    })
  })
  .catch(err => {
    res.send(500).send({
      msg: 'cannot get rockets',
      err: err
    })
  })
}

const getRocket = (req, res) => {
  Model.Rocket.findOne({ id: req.params.id })
  .then(rocket => {
    res.json({
      msg: 'OK',
      rocket: rocket
    })
  })
  .catch(err => {
    res.send(500).send({
      msg: 'cannot get rocket',
      err: err
    })
  })
}

const editRocket = (req, res) => {
  let dataInsert = {
    name: req.body.name,
    img: req.body.img,
    desc: req.body.desc,
    price: req.body.price
  }
  Model.Rocket.update(dataInsert, {where: {id: req.params.id }})
  .then(() => {
    res.json({
      msg: 'OK',
      newRocket: dataInsert
    })
  })
  .catch(err => {
    res.send(500).send({
      msg: 'cannot edit new rocket',
      err: err
    })
  })
}

const deleteRocket = (req, res) => {
  Model.Rocket.destroy({where: {id: req.params.id }})
  .then(() => {
    res.json({
      msg: 'OK'
    })
  })
  .catch(err => {
    res.send(500).send({
      msg: 'cannot delete rocket',
      err: err
    })
  })
}

module.exports = {
  welcomePage,
  addRocket,
  getRockets,
  getRocket,
  editRocket,
  deleteRocket
};
