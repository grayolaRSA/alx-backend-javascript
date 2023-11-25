const express = require('express');

const app = express();
app.use(express.json());
const PORT = 7865;

app.get('/', (_, res) => {
    res.send('Welcome to the payment system');
  });

  app.get('/cart/:id(\\d+)', (req, res) => {
    const id = req.params.id;
    res.send(`Payment methods for cart ${id}`);
  });
  
  app.get('/available_payments', (req, res) => {
    payObj = {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    };

    res.json(payObj);

  });

  app.post('/login', function (req, res) {
    let username = '';
  
    if (req.body) {
      username = req.body.userName;
    }

    res.send(`Welcome ${username}`);
  });
  
  app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
  });


  module.exports = app;