import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello from autodeployed code🚀' });
});

app.get('/api', (req, res) => {
  res.json({ data: 'This is your API endpoint' });
});

app.post('/api', (req, res) => {
  const body = req.body;
  res.json({
    message: 'Data received successfully',
    data: body
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});