# AI Interview Copilot

An AI-powered interview preparation platform that helps candidates analyze their resumes, understand ATS compatibility, and prepare for technical and HR interviews.

## Features

- **Resume Analysis:** Upload a PDF resume and extract its text for analysis.
- **ATS Score Analysis:** Analyze resume content using AI to identify strengths and areas for improvement.
- **AI-Generated Interview Questions:** Generate HR, technical, and project-based questions based on resume information.
- **User Authentication:** Register and log in with JWT-based authentication.
- **Full-Stack Architecture:** Separate frontend and backend applications.

## Tech Stack

**Frontend**
- React.js
- Vite
- Tailwind CSS

**Backend**
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Multer for file uploads
- PDF parsing

**AI Integration**
- Google Gemini API

## Project Structure

```text
AI-Interview-Copilot/
├── client/       # Frontend application
├── server/       # Backend API
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB database
- Google Gemini API key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SwiftQuilll/AI-Interview-Copilot.git
   cd AI-Interview-Copilot
   ```

2. Install frontend dependencies:

   ```bash
   cd client
   npm install
   ```

3. Install backend dependencies:

   ```bash
   cd ../server
   npm install
   ```

### Environment Variables

Configure the environment variables required by the backend in a `.env` file. These may include:

- MongoDB connection URI
- JWT secret
- Google Gemini API key
- Server port

Use the variable names expected by your application code. Never commit real API keys, passwords, or secrets to GitHub.

### Run the Application

Start the backend and frontend in separate terminals using the development scripts configured in their respective `package.json` files.

Check each package's scripts and environment configuration before running the application.

## What I Learned

- Building and connecting frontend and backend components.
- Implementing authentication and protected API routes.
- Working with MongoDB for application data.
- Processing uploaded PDF resumes.
- Integrating an AI API into a practical application.
- Organizing a full-stack application into separate client and server components.

## Future Improvements

- Add automated tests for API endpoints and core functionality.
- Improve error handling and input validation.
- Enhance resume feedback and interview evaluation.
- Add more detailed setup and deployment documentation.

## Author

**Ashutosh Singh Bhadoriya**

- GitHub: [SwiftQuilll](https://github.com/SwiftQuilll)
