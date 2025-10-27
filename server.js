const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB
const DB_URI = 'mongodb://localhost:27017/RightDoorDB';
mongoose.connect(DB_URI)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Define the Applicant Schema
const applicantSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  selectedCraft: String,
  experience: String,
  resumePath: String, // Store the path to the resume file
  submittedAt: { type: Date, default: Date.now }
});

const Applicant = mongoose.model('Applicant', applicantSchema);

// Middleware
app.use(express.static(path.join(__dirname, '/')));

// Multer for file uploads
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${req.body.name}-${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed!'), false);
    }
  }
});

// Handle the complete application submission
app.post('/api/submit-application', upload.single('resume'), async (req, res) => {
  try {
    const { name, email, phone, selectedCraft, experience } = req.body;
    const resumeFile = req.file;

    if (!resumeFile) {
      return res.status(400).json({ message: 'No resume file uploaded.' });
    }

    // Create a new applicant document
    const newApplicant = new Applicant({
      name,
      email,
      phone,
      selectedCraft,
      experience,
      resumePath: resumeFile.path // Save the file path to the database
    });

    // Save the document to the database
    await newApplicant.save();
    console.log('Applicant data saved to database:', newApplicant);

    res.status(200).json({ message: 'Application submitted successfully!' });
  } catch (error) {
    console.error('Error saving application:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});