# API Documentation
Auth: POST /api/auth/register, POST /api/auth/login, GET /api/auth/me, PUT /api/auth/change-password
Candidate: GET/PUT /api/candidate/profile, POST /api/candidate/upload-resume, GET /api/candidate/dashboard, GET /api/candidate/applications, GET /api/candidate/saved-jobs, POST/DELETE /api/candidate/save-job/:jobId
Recruiter: GET/PUT /api/recruiter/profile, GET /api/recruiter/dashboard, GET /api/recruiter/jobs, GET /api/recruiter/applicants/:jobId, PUT /api/recruiter/application/:applicationId/status, POST /api/recruiter/application/:applicationId/interview
Jobs: GET /api/jobs, GET /api/jobs/:id, POST /api/jobs, PUT /api/jobs/:id, DELETE /api/jobs/:id, POST /api/jobs/:id/apply
Admin: GET /api/admin/dashboard, users, jobs, applications
