const express = require('express');
const cors = require('cors');
const Mobile = require('./model/mobile');


const app = express();
app.use(cors());

const PORT = 8000;

app.get('/api/mobiles', (req, res) => {
  const mobileResponse = {
    message: 'Success',
    data: Mobile,
    status: true
  }
  res.json(mobileResponse)
})


app.get('/', (req, res) => {
  return res.send('Nothing to see here... Just go to `/Mobiles/`');
})

app.listen(PORT, () => console.log(`server is running on PORT: ${PORT}`));
