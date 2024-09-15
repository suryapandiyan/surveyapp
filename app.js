const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const surveyRoutes = require('./routes/survey');

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/surveys', surveyRoutes);

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
