const PORT = process.env.PORT || 3001;
const express = require("express");
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use('/api/notes', require('./routes/notes.js'));
app.use('/', require('./routes/index.js'));

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});