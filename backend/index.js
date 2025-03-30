import express from 'express'
const app = express();
const apiRoutes = require('./routes/api');

app.use(express.json());
app.post('/chat', (req, res) => {
  const { message } = req.body;

  // Example response logic
  const botReply = `You said: ${message}`;
  res.json({ reply: botReply });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));