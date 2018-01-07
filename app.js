const app = require('express')();
const bodyParser = require('body-parser');
const morgan = require('morgan')

const userRoute = require('./routers/userRoute')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

app.get('/', (req, res) => {
  res.json({
    status: 'OK'
  })
})

app.use('/user', userRoute)

app.listen(3000, () => console.log('running on 3000'))
