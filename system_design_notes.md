# Building a Single Server Web App from Scratch

This guide documents the process of building a simple web application. It is designed so that anyone can follow these steps to recreate the project from scratch.

## 1. Concepts & Terminology

Before we begin, it's helpful to understand the tools we are using:

*   **Node.js**: This is the **runtime environment**. Think of it as the engine that allows JavaScript to run on a server, outside of a web browser. It provides the ecosystem for your application to run.
*   **Express**: This is a **web framework** for Node.js. If Node.js is the engine, Express is the chassis and steering wheel—it provides a structural set of features (like routing and middleware) to make building web servers easier and faster.
*   **Git**: A version control system to track changes in your code.
*   **NPM (Node Package Manager)**: The tool used to install and manage libraries (like Express).

## 2. Step-by-Step Implementation

### Step 1: Initialize the Project

First, we create a `package.json` file. This file acts as the manifest for our project, tracking metadata and dependencies.

```bash
npm init -y
```

*   `npm init`: Initializes a new NPM project.
*   `-y`: Answers "yes" to all default prompts (e.g., version, description) to generate the file quickly.

### Step 2: Install Dependencies

We need to install Express to handle web requests.

```bash
npm install express
```

This command does two things:
1.  Downloads the `express` code into a `node_modules` folder.
2.  Adds `express` to the dependencies list in `package.json`.

### Step 3: Initialize Version Control

To track our changes, we initialize a Git repository.

```bash
git init
```

**What does `git init` actually do?**
When you run `git init`, it creates a hidden directory called `.git` inside your project folder.
*   This `.git` folder contains all the metadata and object database for your project (commits, branches, tags, etc.).
*   It effectively tells Git: "Start watching this directory and treat it as a repository."
*   Before this command, your folder is just a regular folder. After this command, it is a Git repository.

### Step 4: Configure .gitignore

We never want to commit the `node_modules` folder to Git because it's huge and can be easily recreated using `npm install`.

**File: `.gitignore`**
```text
node_modules/
.env
```

*   Any file or folder listed here will be ignored by Git commands.

### Step 5: Implement the Server

We will create a file named `server.js` to define our web server.

**File: `server.js`**
```javascript
const express = require('express');
const app = express();
const port = 3000;

// Route for /users/12
app.get('/users/12', (req, res) => {
  const user = {
    id: 12,
    firstName: "John",
    lastName: "Smith",
    address: { 
      streetAddress: "21 2nd Street", 
      city: "New York", 
      state: "NY", 
      postalCode: 10021 
    },
    phoneNumbers: ["212 555-1234", "646 555-4567"]
  };
  
  res.json(user);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

*   `require('express')`: Imports the Express library.
*   `app = express()`: Creates an instance of an Express application.
*   `app.get('/users/12', ...)`: Defines a route. When the server receives a **GET** request for the URL path `/users/12`, it will run the provided function.
*   `res.json(user)`: Sends the `user` object back to the client as a JSON response.
*   `app.listen(port)`: Starts the server and tells it to listen for requests on port 3000.
*   `node server.js`: Runs the server.

### Step 6: How Client-Server Communication Works

When you type `http://localhost:3000/users/12` into your browser, here is what happens:

1.  **Request (Client -> Server)**:
    *   The **Client** (your web browser) constructs an **HTTP Request**.
    *   It looks up the IP address for `localhost` (which is 127.0.0.1, your own computer).
    *   It connects to port `3000`.
    *   It sends a message like: "GET /users/12 HTTP/1.1". This asks the server for resource `/users/12`.

2.  **Processing (Server)**:
    *   Your Node.js/Express server (listening on port 3000) receives this message.
    *   Express looks at its list of routes. It finds a match for `GET` method and `/users/12` path.
    *   It runs the callback function associated with that route.
    *   The function creates the `user` object.

3.  **Response (Server -> Client)**:
    *   The server sends back an **HTTP Response**.
    *   It includes a status code (like 200 OK) and headers (telling the browser the content is JSON).
    *   It sends the actual data (the JSON body).

4.  **Rendering (Client)**:
    *   The browser receives the JSON and displays it to you.

### Step 7: Saving Progress with Git

Now that we have a working server, we need to save our changes.

**Why Stage Files?**
Git has a rudimentary area called the **Staging Area** (or Index).
*   **Working Directory**: Where you edit files.
*   **Staging Area**: A "draft" of your next commit. You pick and choose exactly which changes you want to include.
*   **Repository**: The capabilities history of your project.

Staging allows you to group related changes together. For example, if you fixed a bug and added a feature in the same file, you could stage them separately (though that's advanced usage).

**Commands to Run:**

1.  **Stage all changes:**
    ```bash
    git add .
    ```

2.  **Commit the changes:**
    We use the **Conventional Commits** standard: `type(scope): description`.
    *   `feat`: A new feature
    *   `fix`: A bug fix
    *   `docs`: Documentation only changes
    *   `chore`: Maintenance

    For this step, a good message would be:
    ```bash
    git commit -m "feat: implement basic existing express server with users endpoint"
    ```
