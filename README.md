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

# Components Documentation

## TaskSections Component

**Purpose:**
Displays tasks organized by their status (Todo, In Progress, Completed).

**Props:**
- `status`: Filters tasks based on their current status.

**State Management:**
- Uses `useSelector` from React Redux to access tasks from the Redux store.

## TaskAdder Component

**Purpose:**
Handles the creation of new tasks.

**State Management:**
- Uses `useState` for local state management.
- Uses `useDispatch` to dispatch Redux actions for adding new tasks.

**Validation:**
- Ensures that a task's name is provided before submission.

## UpdaterModal Component

**Purpose:**
Used for updating or deleting tasks.

**Props:**
- `onClose`: Closes the modal.
- `isOpen`: Determines if the modal is open or closed.
- `task`: The task being edited or deleted.
- `setTask`: Updates the task's details.

**State Management:**
- Uses Redux to dispatch actions for updating or deleting tasks.
- Uses `useDispatch` from React Redux to interact with the Redux store.

### Additional Considerations:

- **Code Examples:** Include code snippets to illustrate how to use the components.
- **Styling:** Consider using a Markdown linter or a code formatter to improve readability.
- **Organization:** Group components by functionality or relatedness.
- **Versioning:** If applicable, document component versions and changes.
- **Testing:** Mention any unit or integration tests for the components.

## State Management with Redux Toolkit

**Purpose:**
- Manages the application's state in a predictable and efficient manner.
- Simplifies Redux store setup and logic writing.

**Key Concepts:**

- **Slices:** Encapsulate related state logic and actions into reusable modules.
- **Reducers:** Pure functions that update state based on actions.
- **Actions:** Objects that describe state changes.
- **Thunks:** Asynchronous actions that can perform side effects (e.g., API calls).
- **Selectors:** Functions that extract specific parts of the state.

**Actions:**

- `addTask`: Adds a new task to the state and saves it to the Firebase database.
- `updateTask`: Updates an existing task based on its ID.
- `deleteTask`: Removes a task from the state by its ID.
- `dndTask`: Handles drag-and-drop operations for tasks.



## Notion Doc [https://www.notion.so/Frontend-Task-Board-Infinity-1cfa373ab49641f6bb3e08942237f76c?pvs=4](https://www.notion.so/Frontend-Task-Board-Infinity-1cfa373ab49641f6bb3e08942237f76c?pvs=4)
<img width="1223" alt="Screenshot 2024-09-09 at 10 22 12 PM" src="https://github.com/user-attachments/assets/4a3c0a70-b7c5-4a31-8bed-b648e1f616e7">

## Links
**GitHub Profile:** https://github.com/shubhamsingh872


**Repository Link:** https://github.com/shubhamsingh872/BOARD-INFINITY-ASSIGNMENT


**Demo Link:** https://board-infinity-assignment.vercel.app/



## Learning Outcome

**Any complexity/difficulty faced while developing this app?**
- Yes, I encountered some challenges with integrating Firestore Database and real-time data handling. Ensuring smooth and efficient real-time updates in the UI required careful setup of listeners and state management. Additionally, integrating Ant Design as a component library presented its own difficulties, particularly in aligning its components with the dynamic data updates from Firestore and ensuring a consistent user experience.

**Reason for not completing any one of the Checklist Items ( if any )?**
- The reason I didn't implement TypeScript in the project is that I'm still in the process of learning it. I wanted to ensure I had a solid understanding of TypeScript before integrating it into the project, so I focused on mastering the core features first.

**Did you get to learn anything new/key concepts?**
- Yes, I learned about using Firestore Database to store and manage data efficiently, and how to handle real-time data updates in React. This involved understanding how to set up real-time listeners to keep the UI in sync with changes in the database.

**Any feedback?**
- The assignment was well-structured and provided a great opportunity to learn and apply key concepts with Firestore and Ant Design. However, it might be helpful to include more detailed guidance or resources on integrating complex components and real-time data handling. Additionally, some examples or best practices for working with these technologies could enhance the learning experience. Overall, the assignment was engaging and challenging, contributing significantly to my understanding of the technologies used.










