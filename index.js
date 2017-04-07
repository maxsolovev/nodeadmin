const express = require('express');
const app = express();

const nodeadmin = require('nodeadmin');
app.use(nodeadmin(app));

app.get('/', (req, res) => res.redirect('/nodeadmin'))

const server = app.listen(process.env.PORT || 2222, () => console.log(`Ready on port ${server.address().port}`))