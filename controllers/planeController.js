const Plane = require('../db/Plane.js')

const welcomePage = (req, res) => {
  res.json({
    msg: 'Plane endpoint',
    ver: '1.0.0'
  })
}

const addPlane = (req, res) => {
  Plane.addPlane(req.body, (err, data) => {
    if(err) res.status(500).send({
      msg: 'cannot add new plane',
      err: err
    })
    else {
      res.json({
        msg: 'ok',
        newPlane: req.body
      })
    }
  })
}

const getPlanes = (req, res) => {
  Plane.getPlanes((err, data) => {
    if(err) res.status(500).send({
      msg: 'cannot get planes',
      err: err
    })
    else {
      res.json({
        msg: 'ok',
        planes: data
      })
    }
  })
}

const getPlane = (req, res) => {
  Plane.getPlane(req.params.id, (err, data) => {
    if(err) res.status(500).send({
      msg: 'cannot get plane ' + req.params.id,
      err: err
    })
    else {
      res.json({
        msg: 'ok',
        planes: data
      })
    }
  })
}

const editPlane = (req, res) => {
  Plane.editPlane(req.params.id, req.body, (err, data) => {
    if(err) res.status(500).send({
      msg: 'cannot edit plane ' + req.params.id,
      err: err
    })
    else {
      res.json({
        msg: 'ok',
        newPlane: req.body
      })
    }
  })
}

const deletePlane = (req, res) => {
  Plane.deletePlane(req.params.id, (err, data) => {
    if(err) res.status(500).send({
      msg: 'cannot delete plane ' + req.params.id,
      err: err
    })
    else {
      res.json({
        msg: 'ok'
      })
    }
  })
}

module.exports = {
  welcomePage,
  addPlane,
  getPlanes,
  getPlane,
  editPlane,
  deletePlane
};
