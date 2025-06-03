const express = require('express');
const app = express();
const port = 3001;

const cors = require('cors');
const cookie_session = require('cookie-session');
const logBeforeAndAfter = require('./middlewares/log-before-and-after');
app.use(express.json());
app.use(cors());
app.use(cookie_session({
  keys: ["myVerySecretKey"]
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

