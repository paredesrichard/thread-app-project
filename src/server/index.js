const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('dist'));

app.get('/api/hello', (req, res) => {
    res.send({
        hello: 'world',
    });
});

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'))
  });

const PORT = process.env.PORT ||8080;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});