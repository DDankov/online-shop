const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

// Basic middleware
app.use(express.json());
app.use(cors()); // allow cross-origin requests during development

app.get('/', (req, res) => res.send('My backend'));

const port = process.env.PORT || 5001;

const server = app.listen(port, () => console.log(`Server is running on port ${port}`));
