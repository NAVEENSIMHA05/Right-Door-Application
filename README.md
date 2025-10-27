# Right-Door-Application
Right Door Application it is the dynamic website
Right Door Filmmaker Application System
Project Document: 
1. Introduction:
Project Name: Right Door
Purpose: To create a visually engaging, multi-step online application system for aspiring filmmakers and craftspeople (Director, Screenwriter, Editor, etc.) to submit their contact information, select their specialization, provide experience details, and upload a resume (PDF).

2. Architecture and Technology Stack:
This project follows a classic MERN-like architecture (MongoDB, Express, Node.js) but uses vanilla HTML/CSS/JS for the frontend, making it a robust full-stack web application.
Layer	Component	Description
Frontend	HTML, CSS, JavaScript	Handles the multi-step user interface, data collection, visual design, and AJAX form submission.
Backend	server.js (Node.js/Express)	Manages routing, file uploads (Multer), database connection (Mongoose), and business logic for application submission.
Database	MongoDB (via Mongoose)	Stores applicant metadata (name, email, craft, experience, resume path).
File Storage	Local File System (Node.js)	Stores the uploaded PDF resume files in an uploads directory.

3. User Flow (Application Process):
The application process is divided into three distinct steps, linked together using client-side redirects and local storage.
Step 1: Personal Information (index.html)
1.Input Collection: User enters their Full Name, Email, and Contact Number.
2.Data Storage: On submission, the JavaScript function goToCraftsPage() saves these three fields temporarily to the browser's localStorage.
3.Navigation: The user is redirected to crafts.html.
<img width="1058" height="481" alt="image" src="https://github.com/user-attachments/assets/cb5e35a9-1d53-4130-9e78-d77e08e1881e" />

Step 2: Craft Selection (crafts.html)
1.Visual Display: The page dynamically loads a grid of 24 different film crafts (e.g., Director, Producer, Sound Designer) using data defined in script.js.
2.Interaction: The user clicks on a craft item.
3.Data Storage: The selected craft name is saved to localStorage.
4.Navigation: The user is redirected to apply.html.
<img width="1054" height="480" alt="image" src="https://github.com/user-attachments/assets/74a5d964-8a8a-43ac-bf4d-b93e7b830e0f" />

Step 3: Final Submission and Resume Upload (apply.html)
1.Display: The previously selected craft is retrieved from localStorage and displayed on the page.
2.Input Collection: User provides detailed Experience & Portfolio text and uploads a Resume file (PDF only).
3.Submission: On form submission, the JavaScript retrieves the contact info (from Step 1) and the selected craft (from Step 2) from localStorage. It combines this with the experience text and the resume file into a single FormData object.
<img width="1050" height="474" alt="image" src="https://github.com/user-attachments/assets/7afdf9d6-e278-429d-b70f-779198715ad2" />

4.Backend Call: An asynchronous fetch request sends the application data to the /api/submit-application endpoint on the Express server.
5.Success/Cleanup: If the submission is successful (HTTP 200), a custom success modal is shown, and the localStorage is cleared.

4. Backend (server.js) Functionality:
The Node.js/Express server is the central processing unit for data handling and persistence.
A. Database Connection & Schema
Database: Connects to a local MongoDB instance using Mongoose (mongodb://localhost:27017/RightDoorDB).
Model (Applicant): Defines the structure for storing applicant data:
oname, email, phone, selectedCraft, experience: Standard strings.
oresumePath: Stores the local file path where the PDF is saved.
osubmittedAt: Timestamp.
<img width="1081" height="575" alt="image" src="https://github.com/user-attachments/assets/752c8917-3c82-4e18-985c-659cc1a52241" />

B. File Upload Handling
Tool: Uses the multer middleware for processing multipart/form-data.
Storage: Configured to save files to a local directory named uploads.
Naming Convention: Files are uniquely named using the applicant's name, a timestamp, and the original file name (<Name>-<Timestamp>-<OriginalName>.pdf).
File Filtering: Enforces a strict filter to accept only files with the MIME type application/pdf.
C. Submission Endpoint (POST /api/submit-application)
1.Middleware: The request is first processed by upload.single('resume') to handle the file upload.
2.Validation: Checks if a file was successfully uploaded.
3.Data Persistence: A new Applicant document is created using data from req.body and the file path from req.file.
4.Database Save: The document is saved to the MongoDB collection.
5.Response: Returns a 200 status code and a success message to the client.

5. Styling and Aesthetics (style.css):
The application features a cinematic, dark-themed design:
Background: Uses a fixed, full-screen background image (wp11242162.jpg) with a dark, semi-transparent overlay to ensure text contrast.
Glassmorphism: The main content containers use a background color with low opacity and a backdrop-filter: blur(8px) to create a modern, frosted glass effect.
Typography: Uses a stylish, decorative font for headings and clear, legible sans-serif font for form labels and inputs.
Craft Grid: Uses a responsive CSS Grid layout (repeat(auto-fit, minmax(180px, 1fr))) for the selection page, ensuring an optimal display on all device sizes. Each craft item includes a hover effect (transform: scale(1.05)) for enhanced interactivity.
Modal: Includes a styled modal for displaying success messages, using a slide-down animation for a smooth user experience.
Design & Aesthetics:
Background & Styling:
A cinematic background image sets the tone across all pages
Smooth blur overlays, rounded corners, and glassmorphism-style cards make the interface sleek and modern
Carefully selected fonts and colors improve readability and professionalism
Interactivity:
Smooth page transitions
Fully responsive craft grid layout
JavaScript enhances:
oCraft selection
oResume submission flow
oSuccess modal




























