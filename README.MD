# TOTLE - Backend Developer Intern Task

## 🚀 Project: Topic Retrieval API

This project is a Node.js/Express API that allows retrieving topic data from a JSON file with filtering and optional sorting.

---

## 📂 Folder Structure

totle-topic-api/
├── data/
│ └── topics.json # JSON file containing topic data
├── routes/
│ └── topics.js # API route handling logic
├── index.js # Entry point for Express server
├── package.json # Node.js dependencies
├── README.md # Documentation and instructions
└── video.mp4 # 2-minute video explanation

You cab test the API like this:

`http://localhost:3000/api/topics?search=node&sort=name`