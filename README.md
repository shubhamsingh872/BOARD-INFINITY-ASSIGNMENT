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

This document provides an overview of the key components in our project, including their purpose, props, state management, and validation.

## TaskSections Component

**Purpose**: 
The `TaskSections` component displays tasks organized by their status. It categorizes tasks into sections such as "Todo", "In Progress", and "Completed" to enhance organization and management.

**Props**:
- `status` (string): Used to filter and display tasks according to their current status.
# TaskAdder Component

## Overview

The `TaskAdder` component allows users to create new tasks by filling out a form. The form includes fields for the task's name, description, and status. It uses local state to manage input values and integrates with Redux to dispatch actions for adding tasks.

## Features

- **Form Inputs**: Users can input a task's name, description, and status.
- **Validation**: Ensures that the task's name is provided before allowing submission.
- **State Management**: Utilizes React's `useState` for managing local form state and `useDispatch` from React Redux for dispatching actions.

## Installation

To use the `TaskAdder` component, make sure you have the following dependencies installed:

```bash
npm install react react-redux
- Uses `useSelector` from React Redux to access tasks from the Redux store.

**Example Usage**:
```jsx
<TaskSections status="In Progress" />
