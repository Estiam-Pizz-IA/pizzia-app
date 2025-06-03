const express = require('express');
const app = express();
const port = process.env.PIZZAPI_PORT || 3001;

const cors = require('cors');
const cookie_session = require('cookie-session');
const logBeforeAndAfter = require('./middlewares/log-before-and-after');
app.use(express.json());
app.use(cors({
  'origin': ["http://localhost", "http://localhost:80", "http://localhost:3000"],
  'credentials': true,
}));
app.use(cookie_session({
  'keys': ["myVerySecretKey"],
  'secure': false,
  'httpOnly': true,
  'name': 'pizzapiSession'
}));
app.use(logBeforeAndAfter);

app.get('/', (req, res) => {
  res.send('Welcome on PizzAi API!')
})

//routers
app.use('/products', require('./routers/products'));
app.use('/orders', require('./routers/orders'));
app.use('/auth', require('./routers/auth'));

app.listen(port, () => {
  console.log(`Pizzapi app listening on port ${port}`);
})

