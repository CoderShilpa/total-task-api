const express = require('express');
const topicRoutes = require('./routes/topics');
const app = express();
const PORT = 3000;

app.use('/api/topics', topicRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
