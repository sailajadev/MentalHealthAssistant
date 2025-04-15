const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
app.use(express.static('public')); // Serve frontend build

app.use(cors());
app.use(bodyParser.json());

app.get('/health', (req, res) => {
    res.send('Mental Health Assistant is running!');
});

app.use('/api', apiRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
