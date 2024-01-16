# CORTX Web Application

## Introduction

This is a web application for fetching real time data from an EEG-based wearable. The real time EEG data is fetched and displayed in the form of graphs.

## Technologies Used

- **React.js**: The frontend of the application is built using React.js, a popular JavaScript library for building user interfaces.
- **Chart.js**: Chart.js is used for dynamically displaying the EEG data from the wearable.
- **Flask**: Used for backend server. The data from the lsl is sent to the server and this data is fetched at the frontend. Also used to send mails to the admin from clients.
- **Multithreading using Web Workers**: For smoother retrieval of data from the recorded CSV files.

## Installation

To run the Carbon Footprint Calculator on your local machine, follow these steps:

1. Clone the GitHub repository: `git clone `

2. Navigate to the project directory: `cd CORTX-Web-App`

3. Navigate to the frontend directory: `cd frontend` 

5. Install dependencies: `npm install`

6. Start the development server: `npm start`

7. Access the frontend in your web browser at `http://localhost:3000`.

8. Navigate to the backend directory: `cd backend`

9. Run the backend server: `python backend.py` 

## Contribute

Feel free to fork the repository, make improvements, and submit pull requests to help me enhance the application.
