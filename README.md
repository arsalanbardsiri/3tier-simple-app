# 3-Tier Simple App

This project demonstrates the evolution of a web application from a single-server setup to a 3-tier architecture.

## Architecture

- **Tier 1 (Client)**: Web Browser / Mobile App (simulated)
- **Tier 2 (Web Server)**: Node.js Express Application
- **Tier 3 (Database)**: PostgreSQL (running via Docker Compose)

## Prerequisites

- Node.js installed
- Docker and Docker Compose installed

## Getting Started

### 1. Start the Database (Data Tier)
We use Docker Compose to spin up the PostgreSQL database. This acts as our dedicated database server.

```bash
docker compose up -d
```

To stop the database:
```bash
docker compose down
```

### 2. Start the Web Server (Web Tier)
Install dependencies (if not already done):
```bash
npm install
```

Start the application:
```bash
npm start
```

## Project Structure
- `server.js`: The Web Application Server.
- `docker-compose.yml`: Configuration for the Database Server (PostgreSQL).
- `system_design_notes.md`: Study notes on system architecture.
