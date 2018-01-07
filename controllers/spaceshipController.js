const Spaceship = require('../model_mongo/Spaceship');

const welcomePage = (req, res) => {
  res.json({
    msg: 'Spaceship endpoint',
    ver: '1.0.0'
  })
}

const addSpaceship = async (req, res) => {
  try {
    const spaceship = new Spaceship(req.body)
    const saveSpaceship = await spaceship.save()
    res.json({
      msg: 'OK',
      newSpaceship: req.body
    })
  } catch (err) {
    res.status(500).send({
      msg: 'cannot post new spaceship',
      err: err
    })
  }
}

const getSpaceships = async (req, res) => {
  try {
    const spaceships = await Spaceship.find()
    res.json({
      msg: 'OK',
      spaceships: spaceships
    })
  } catch (err) {
    res.status(500).send({
      msg: 'cannot get spaceships',
      err: err
    })
  }
}

const getSpaceship = async (req, res) => {
  try {
    const spaceship = await Spaceship.findOne({ _id: req.params.id })
    res.json({
      msg: 'OK',
      spaceship: spaceship
    })
  } catch (err) {
    res.status(500).send({
      msg: 'cannot get spaceship ' + req.params.id,
      err: err
    })
  }
}

const editSpaceship = async (req, res) => {
  try {
    const newSpaceship = await Spaceship.update({ _id: req.params.id }, req.body)
    res.json({
      msg: 'OK',
      newSpaceship: req.body
    })
  } catch (err) {
    res.status(500).send({
      msg: 'cannot edit spaceship ' + req.params.id,
      err: err
    })
  }
}

const deleteSpaceship = async (req, res) => {
  try {
    const spaceshipDelete = await Spaceship.remove({ _id: req.params.id })
    res.json({
      msg: 'OK'
    })
  } catch (err) {
    res.status(500).send({
      msg: 'cannot delete spaceship ' + req.params.id,
      err: err
    })
  }
}

module.exports = {
  welcomePage,
  addSpaceship,
  getSpaceships,
  getSpaceship,
  editSpaceship,
  deleteSpaceship
};
