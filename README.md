<<<<<<< HEAD
# WealthX

### Make sure to create a `.env` file with following variables -

```
DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=

RESEND_API_KEY=

ARCJET_KEY=


WealthX Project Setup and Integration Guide
This document provides comprehensive instructions to set up the WealthX project, integrate the Pathway service, and ensure its proper functioning within your development environment.​

Prerequisites
Before proceeding, ensure that the following software is installed on your system:

Python 3.10 or above: Required for running Pathway services.​
GitHub

Node.js and npm: Necessary for managing JavaScript dependencies and running the development server.​

Docker: Optional, for installing Pathway using Docker.​

Project Structure
The WealthX project has the following directory structure:​

ruby
Copy
Edit
WealthX
├── .next
├── actions
├── app
├── api
├── lib
├── pathway              # New directory for Pathway integration
│   ├── config.js
│   ├── processors.js
│   ├── visualizations.js
│   ├── index.js
│   └── connectors
│       ├── database.js
│       └── apiConnector.js
├── public
├── styles
├── README.md
├── package.json
└── ...
The pathway directory contains all files related to the Pathway service integration.​

Setup Instructions
Follow these steps to set up and run the WealthX project with Pathway integration:

1. Clone the Repository
Begin by cloning the WealthX repository to your local machine:​
Gist

bash
Copy
Edit
git clone https://github.com/your-username/WealthX.git
cd WealthX
2. Install Node.js Dependencies
Install the necessary Node.js packages using npm:​

bash
Copy
Edit
npm install
3. Create and Activate a Python Virtual Environment
It's recommended to use a virtual environment for Python dependencies:​

On macOS and Linux:

bash
Copy
Edit
  python3 -m venv venv
  source venv/bin/activate
On Windows:

bash
Copy
Edit
  python -m venv venv
  venv\Scripts\activate
4. Install FastAPI
With the virtual environment activated, install FastAPI:​

bash
Copy
Edit
pip install fastapi
5. Install Pathway
Pathway can be installed via pip or using Docker:​

Using pip:

bash
Copy
Edit
  pip install -U pathway
Note: Pathway requires Python 3.10 or above and is available on macOS and Linux. Windows users may consider using WSL, Docker, or a virtual machine.

Using Docker:

bash
Copy
Edit
  docker pull pathwaycom/pathway
This command pulls the official Pathway Docker image from Docker Hub.​

6. Start the Pathway Service
Run the start_pathway_service.py script to initiate the Pathway service:​

bash
Copy
Edit
python start_pathway_service.py
Ensure that this script is configured correctly to interact with the components in the pathway directory.​

7. Run the Development Server
In a separate terminal window, start the development server:​

bash
Copy
Edit
npm run dev
This command launches the application, typically accessible at http://localhost:3000.​

Verifying the Pathway Integration
To confirm that Pathway is integrated and functioning correctly within the WealthX project:

Check the Installed Version of Pathway:

Execute the following command:

bash
Copy
Edit
python -c "import pathway as pw; print(pw._version_)"
This should display the installed version of Pathway, indicating a successful installation.

Monitor the Pathway Service:

After running start_pathway_service.py, observe the terminal output for any errors or logs that might indicate issues.

Test Pathway Components:

Ensure that the modules within the pathway directory (config.js, processors.js, visualizations.js, index.js, connectors/database.js, connectors/apiConnector.js) are correctly configured and operational. Implement unit and integration tests as needed.

Additional Resources
Pathway Documentation: Refer to the official Pathway documentation for detailed information on configuration and usage.​

FastAPI Documentation: Consult the FastAPI documentation for guidance on building APIs with FastAPI.​

Docker Documentation: Visit the Docker documentation for instructions on installing and using Docker.​

By following these steps and utilizing the resources provided, you should have the WealthX project set up with Pathway integrated successfully.
