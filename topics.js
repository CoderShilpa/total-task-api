const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  const search = req.query.search;
  const sort = req.query.sort;

  if (!search || typeof search !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing "search" query parameter.' });
  }

  const filePath = path.join(__dirname, '../data/topics.json');

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('File read error:', err);
      return res.status(500).json({ error: 'Server error while reading data.' });
    }

    let topics = JSON.parse(data);

    // Filter by name (case-insensitive)
    let filtered = topics.filter(topic =>
      topic.name.toLowerCase().includes(search.toLowerCase())
    );

    // Optional sort
    if (sort === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    res.status(200).json(filtered);
  });
});

module.exports = router;
