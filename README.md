# Kanban Board Project

## Objective
The goal of this project is to develop a Kanban board application using React or Next.js. The application allows users to manage tasks, including creating, editing, deleting, and changing the status of tasks. Tasks are stored in a Firestore database provided by Google Firebase. This project will demonstrate proficiency in frontend development, component library usage, and database integration.

## Features
- **Task Management:** Create, edit, delete tasks.
- **Status Update:** Move tasks between columns (TODO, IN PROGRESS, COMPLETED).
- **Modal for Task Creation:** A modal form for task creation and editing.
- **Drag and Drop:** Change task status using drag-and-drop (optional).
- **Firebase Integration:** Tasks stored in Firestore.
- **Responsive Design:** UI similar to the provided Figma reference.
- **Deployment:** Hosted on Vercel.

## Technologies Used
- **Frontend:** React/Next.js
- **Styling:** CSS Framework (Tailwind/Ant Design/Material UI/React Bootstrap)
- **Database:** Firebase Firestore
- **Hosting:** Vercel

## Setup Instructions

### Prerequisites
- Node.js
- Firebase account
- GitHub account

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/profile/repo_name.git
   cd repo_name
2. Install the dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```


# Firebase Setup Guide

This guide will help you set up Firebase for your project. Follow these steps to configure Firebase and integrate it with your application.

## 1. Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click on "Add project" and follow the on-screen instructions to create a new Firebase project.

## 2. Enable Firestore Database

1. In the Firebase Console, select your newly created project.
2. Navigate to the "Build" section in the left sidebar.
3. Click on "Firestore Database".
4. Click on "Create database" and follow the prompts to set up Firestore.

## 3. Obtain Firebase Configuration Details

1. In the Firebase Console, go to the project settings by clicking on the gear icon next to "Project Overview".
2. Under the "General" tab, locate your Firebase configuration details.
3. Note down the following details:
   - API Key
   - Project ID
   - Auth Domain
   - Storage Bucket
   - Messaging Sender ID
   - App ID

### Components Documentation**

- **Tasks Sections Component**:
  Purpose: The TaskSections component displays tasks organized by their status. It categorizes tasks into sections such as "Todo", "In Progress", and "Completed" for better organization and management.
  Props: Receives status to filter and display tasks according to their current status.
  State Management: Uses useSelector from React Redux to access tasks from the Redux store.

- **Task Adder Component**:
  Purpose: The TaskAdder component handles the creation of new tasks. It provides a form that allows users to input a task's name, description, and status.
  State Management: Utilizes useState for managing local state and useDispatch for dispatching Redux actions to add new tasks.
  Validation: Ensures that a task's name is provided before allowing submission.
- **UpdaterModal Component**:
  Purpose: The UpdaterModal component is used for updating or deleting tasks. It opens as a modal dialog when a task is being edited or deleted, allowing users to modify task details or remove the task 
  from the list.
  Props: Receives onClose, isOpen, task, and setTask to manage the modal's visibility and handle task updates or deletions.
  State Management: Utilizes Redux to dispatch actions for updating or deleting tasks. It uses useDispatch from React Redux to interact with the Redux store.
