/**
 * Seeder Script
 * Run once to populate your MongoDB with project data:
 *   node seeder.js
 */
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');

dotenv.config();

const projects = [
  {
    title: 'Hostel Management System',
    description:
      'Digitalizes the full resident life cycle — from admission to vacancy. Features JWT-based authentication, role management, and RESTful APIs for managing rooms, residents, and payments.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    status: 'In Progress',
    githubLink: 'https://github.com/waqas-ahmed',
    liveLink: '',
  },
  {
    title: 'Hotel Booking Website',
    description:
      'Full-featured hotel booking platform with complete CRUD operations, separate admin and user dashboards, booking management, and room availability tracking.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'HTML5', 'CSS3'],
    status: 'Completed',
    githubLink: 'https://github.com/waqas-ahmed',
    liveLink: '',
  },
  {
    title: 'Online Management System',
    description:
      'A Java-based management system built around core OOP principles — encapsulation, inheritance, and polymorphism — with a MySQL backend for persistent data storage.',
    technologies: ['Java', 'MySQL', 'OOP'],
    status: 'Completed',
    githubLink: 'https://github.com/waqas-ahmed',
    liveLink: '',
  },
  {
    title: 'Hospital Management System',
    description:
      'Console-based hospital management application built using Java Data Structures. Implements Linked Lists for patient records, Stacks for surgical queues, and Queues for appointment scheduling.',
    technologies: ['Java', 'Data Structures', 'Linked Lists', 'Stacks', 'Queues'],
    status: 'Completed',
    githubLink: 'https://github.com/waqas-ahmed',
    liveLink: '',
  },
  {
    title: 'Khata System',
    description:
      'A digital ledger management system to replace traditional paper-based khata books. Enables shop owners and small businesses to track credit transactions, manage customer accounts, record dues, and generate balance summaries — all from a clean, simple interface.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    status: 'In Progress',
    githubLink: 'https://github.com/waqas-ahmed',
    liveLink: '',
  },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    await Project.deleteMany();
    console.log('Existing projects cleared');

    await Project.insertMany(projects);
    console.log(`${projects.length} projects seeded successfully`);

    process.exit(0);
  } catch (error) {
    console.error('Seeder error:', error.message);
    process.exit(1);
  }
};

seed();
