# 🚀 ATS Resume Analyzer

An AI-powered ATS (Applicant Tracking System) Resume Analyzer that evaluates resumes against job descriptions, calculates an ATS compatibility score, identifies missing skills, and provides AI-generated optimization suggestions using Google's Gemini AI.

---

## 📌 Features

- 📄 Upload resumes in PDF format
- 🤖 AI-powered resume analysis using Gemini AI
- 📊 ATS Compatibility Score calculation
- 🔍 Resume keyword extraction
- 🎯 Job Description keyword extraction
- ❌ Missing Skills Identification
- ✅ Resume Skills Detection
- 💡 ATS Optimization Tips
- ✍️ AI-generated Bullet Point Improvements
- 📝 Overall Resume Assessment
- 🔐 JWT Authentication
- ☁️ MongoDB Integration

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- CSS
- Fetch API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- PDF.js
- Gemini AI API

---

## 📂 Project Structure

```
ATS-Resume-Analyzer
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/<your-username>/ATS-Resume-Analyzer.git
```

Move into the project

```bash
cd ATS-Resume-Analyzer
```

---

## Backend Setup

Move into server

```bash
cd server
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key
```

Run backend

```bash
npm start
```

---

## Frontend Setup

Move into client

```bash
cd client
```

Install packages

```bash
npm install
```

Run frontend

```bash
npm run build
```

Application will start on vercel

```

```

Backend runs on render

```
ats-resume-analyzer-446w-lwmmka4ck-amru569s-projects.vercel.app
https://ats-resume-analyzer-446w.vercel.app/
```

---

# API Endpoints

## Authentication

### Register

```
POST /auth/register
```

### Login

```
POST /auth/login
```

---

## Resume

### Upload Resume

```
POST /resume/upload
```

Form Data

```
resume : PDF File
```

---

### Analyze Resume

```
POST /resume/analyze
```

Request

```json
{
  "resumeText": "...",
  "jobDescription": "..."
}
```

Response

```json
{
  "success": true,
  "score": 87,
  "analysis": {
    "resume_skills": [],
    "job_description_skills": [],
    "missing_skills": [],
    "compatibility_score": 87,
    "overall_assessment": ""
  }
}
```

---

# Workflow

```
User Uploads Resume
          │
          ▼
PDF Parsing
          │
          ▼
Resume Text Extraction
          │
          ▼
Keyword Extraction
          │
          ▼
ATS Score Calculation
          │
          ▼
Gemini AI Analysis
          │
          ▼
Analysis Report
```

---

# Screenshots

## Login

(Add Screenshot)

---

## Upload Resume

(Add Screenshot)

---

## ATS Report

(Add Screenshot)

---

# Future Improvements

- Resume History
- Multiple Resume Comparison
- Download PDF Report
- Resume Templates
- Dark Mode
- Multi-language Resume Support
- Recruiter Dashboard
- AI Interview Questions
- Job Recommendation System
- Resume Version Tracking

---

# Security

- JWT Authentication
- Password Hashing
- Environment Variables
- Protected API Routes
- Secure File Upload
- MongoDB Validation

---

# Dependencies

- Express
- React
- Vite
- MongoDB
- Mongoose
- JWT
- Multer
- PDF.js
- Gemini AI

---

# Author

**Amrutha Jaganathan**

GitHub:
https://github.com/Amru569

LinkedIn:
https://www.linkedin.com/in/amruthaj

---

# License

This project is developed for educational and portfolio purposes.

---

⭐ If you found this project useful, please consider giving it a star on GitHub!
