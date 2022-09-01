const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

require('./routes/users.js')(app);
app.listen(port, () => console.log(`Running on http://localhost:${port}`));