const app = require('express')();
const mongoose = require('mongoose').connect('mongodb://localhost:27017/spaceship')
const bodyParser = require('body-parser');
const morgan = require('morgan')

const userRoute = require('./routers/userRoute')
const planeRoute = require('./routers/planeRoute')
const rocketRouter = require('./routers/rocketRoute')
const spaceshipRouter = require('./routers/spaceshipRoute')
const spacehouseRouter = require('./routers/spacehouseRoute')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

app.get('/', (req, res) => {
  res.json({
    status: 'OK'
  })
})

app.use('/user', userRoute)
app.use('/plane', planeRoute)
app.use('/rocket', rocketRouter)
app.use('/spaceship', spaceshipRouter)
app.use('/spacehouse', spacehouseRouter)

app.listen(3000, () => console.log('running on 3000'))
