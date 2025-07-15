 🎓 Course Search Web App

A full-stack web application for searching and exploring educational courses. Built using **React** (frontend), **Spring Boot** (backend), and **Elasticsearch** (search engine).

---

## 🚀 Features

- 🔍 Full-text search on course titles and descriptions
- 🎨 Beautiful card-style results display
- 🧩 Modular code structure (React + Spring Boot)
- 🌐 CORS-enabled backend for cross-origin access
- 📦 Bulk data loading into Elasticsearch

---

## 🧰 Tech Stack

| Layer     | Tech Used                                |
|-----------|-------------------------------------------|
| Frontend  | React, Vite, TailwindCSS, React Router DOM |
| Backend   | Spring Boot (Java), Maven                 |
| Search    | Elasticsearch 8.x (Dockerized)            |
| Hosting (Optional) | Render, Netlify, GitHub Pages    |

---

## 🗂️ Project Structure

course-search-app/
│
├── backend/ # Spring Boot app
│ ├── controller/ # REST API controllers
│ ├── service/ # Business logic layer
│ ├── config/ # CORS setup, Elasticsearch config
│ └── resources/
│ └── application.properties
│
├── frontend/ # React app
│ ├── components/ # UI components (HeroSection, Results)
│ ├── api/ # searchApi.js
│ ├── App.jsx # Main component
│ └── assets/ # Images used in UI
│
├── bulk-courses.ndjson # Pre-loaded course data for Elasticsearch
└── README.md # Project overview
