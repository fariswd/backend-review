const bluebird = require('bluebird');
const redis = require('redis');
const client = redis.createClient();
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const welcomePage = (req, res) => {
  res.json({
    msg: 'Spacehouse endpoint',
    ver: '1.0.0'
  })
}

const addSpacehouse = async (req, res) => {
  try {
    let spacehouses = await client.multi().get('spacehouse').execAsync()
    if (spacehouses[0] == null) {
      client.set('spacehouse', JSON.stringify([req.body]), redis.print);
      res.send({
        msg: 'OK',
        newSpaceHouse: req.body
      })
    } else {
      let parsed = JSON.parse(spacehouses)
      parsed.push(req.body)
      client.set('spacehouse', JSON.stringify(parsed), redis.print);
      res.send({
        msg: 'OK',
        newSpaceHouse: req.body
      })
    }
  } catch (err) {
    res.status(500).send({
      msg: 'cannot add spacehouse',
      err: err
    })
  }
}

const getSpacehouses = async (req, res) => {
  try {
    let spacehouses = await client.multi().get('spacehouse').execAsync()
    res.send({
      msg: 'OK',
      spacehouses: JSON.parse(spacehouses)
    })
  } catch (err) {
    res.status(500).send({
      msg: 'cannot get spacehouse',
      err: err
    })
  }
}

const getSpacehouse = async (req, res) => {
  try {
    let spacehouses = await client.multi().get('spacehouse').execAsync()
    let parsed = JSON.parse(spacehouses)
    res.send({
      msg: 'OK',
      spacehouses: parsed[+req.params.id - 1]
    })
  } catch (err) {
    res.status(500).send({
      msg: 'cannot get spacehouse',
      err: err
    })
  }
}

const editSpacehouse = async (req, res) => {
  try {
    let spacehouses = await client.multi().get('spacehouse').execAsync()
    let parsed = JSON.parse(spacehouses)
    parsed.splice(+req.params.id - 1, 1, req.body)
    client.set('spacehouse', JSON.stringify(parsed), redis.print);
    res.send({
      msg: 'OK',
      newSpaceHouse: req.body
    })
  } catch (err) {
    res.status(500).send({
      msg: 'cannot edit spacehouse ' + req.params.id,
      err: err
    })
  }
}

const deleteSpacehouse = async (req, res) => {
  try {
    let spacehouses = await client.multi().get('spacehouse').execAsync()
    let parsed = JSON.parse(spacehouses)
    parsed.splice(+req.params.id - 1, 1)
    client.set('spacehouse', JSON.stringify(parsed), redis.print);
    res.send({
      msg: 'OK'
    })
  } catch (err) {
    res.status(500).send({
      msg: 'cannot edit spacehouse ' + req.params.id,
      err: err
    })
  }
}

module.exports = {
  welcomePage,
  addSpacehouse,
  getSpacehouses,
  getSpacehouse,
  editSpacehouse,
  deleteSpacehouse
};
