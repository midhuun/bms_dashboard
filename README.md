# Project Setup

Follow the steps below to download, install, and run the project.

## Prerequisites
- Ensure that **no other server** is running on the machine before proceeding.

## Steps to Run the Project

1. **Download the Code**
   - Clone this repository to your local machine:
     ```bash
     git clone <repository-url>
     ```

2. **Set up the Client**
   - Navigate to the `client` folder and install the required dependencies:
     ```bash
     cd client
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

3. **Set up the Server**
   - Open a new terminal or tab and navigate to the `server` folder:
     ```bash
     cd ../server
     ```
   - Install the server dependencies:
     ```bash
     npm install
     ```
   - Run the server:
     ```bash
     node index.js
     ```

## Notes
- Ensure the client is running on one terminal, and the server on another.
- If you encounter any issues, check that no conflicting servers are active.

