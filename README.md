<div align="center">

# 💼 HireHub ATS
### Smart Job Portal & Applicant Tracking System

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

Production-quality MERN applicant tracking system for Full Stack Developer portfolios.

</div>

## 🚀 Overview
HireHub supports candidate, recruiter, and admin workflows: job posting, resume uploads, applications, interview scheduling, skill match scoring, dashboards, and role-based access control.

## ✨ Features
- Candidate / Recruiter / Admin authentication
- JWT auth + role-based protection
- Candidate profile + resume PDF upload
- Recruiter company profile
- Job posting, search, filters, details
- Save jobs and apply to jobs
- Duplicate application prevention
- Application statuses: Applied, Under Review, Shortlisted, Interview Scheduled, Rejected, Hired
- Interview scheduling
- Optional email notifications using Nodemailer
- Skill-based match score without paid AI APIs
- Admin analytics and management

## 🧰 Tech Stack
| Layer | Stack |
|---|---|
| Frontend | React, Vite, Tailwind, React Router, Axios, Recharts, Lucide React, React Toastify |
| Backend | Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs, Multer, Nodemailer |
| Security | Helmet, CORS, express-rate-limit, express-validator |
| Database | MongoDB |

## 🏗️ Architecture
```text
React Frontend → Express Backend → MongoDB
Candidate / Recruiter / Admin dashboards use JWT protected REST APIs.
```

## ⚙️ Run Locally
```bash
docker compose up -d mongo
cd backend
npm install
copy .env.example .env
npm run dev
```
```bash
cd frontend
npm install
copy .env.example .env
npm run dev
```
Frontend: http://localhost:5173  
Backend: http://localhost:5000

## 🔑 Admin
Register using `admin@example.com` to become admin automatically.

## 📌 CV Bullet
Developed HireHub, a full-stack MERN applicant tracking system with candidate, recruiter, and admin workflows, including job posting, resume uploads, applications, interview scheduling, skill match scoring, dashboards, and role-based access control.
