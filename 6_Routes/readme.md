# Simple Node.js Server

This repository contains a simple Node.js server that handles different URLs and serves corresponding HTML files.

## Getting Started

To get started with the server, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/simple-nodejs-server.git`
2. Navigate to the project directory: `cd simple-nodejs-server`
3. Install the dependencies: `npm install`
4. Start the server: `node server.js`
5. Open your web browser and visit `http://localhost:3000`

## Prerequisites

Before running the server, ensure that you have the following installed on your machine:

- Node.js: [Download and Install Node.js](https://nodejs.org)
- npm: Node.js package manager, usually comes bundled with Node.js installation

## Usage

The server handles the following URLs:

- `/`: Serves the `mydata.html` file.
- `/subscribe`: Serves the `subscribe.html` file.
- `/subscribeaction`: Accepts a form submission and displays the submitted data.

The server uses the `http`, `fs`, and `url` modules from Node.js core for handling HTTP requests, reading files, and parsing URLs, respectively.

To customize the behavior of the server, you can modify the HTML files or add additional logic in the `display` function in the `server.js` file.

## Directory Structure

The directory structure of this repository is as follows:

```
├── server.js               # Main server code
├── mydata.html             # HTML file for the root URL ("/")
├── subscribe.html          # HTML file for the "/subscribe" URL
└── README.md               # Project documentation (you are here)
```

## Contributing

Contributions are welcome! If you find any issues or want to contribute to the project, please open an issue or submit a pull request.


