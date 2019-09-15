const express = require('express');
const indexRoute = require('./routes/index');

const app = express();
let port = process.env.PORT || 5000;

app.use(indexRoute);

app.listen(port, ()=>{
  console.log(`Server running on port ${port}`)
});
