# System Design Notes

## Evolution: 2-Tier and 3-Tier Architecture

### The Problem with Single Server
With the growth of the user base, one server is not sufficient. We need multiple servers:
- **Web/Mobile Traffic (Web Tier)**: Handles HTTP requests, application logic.
- **Database (Data Tier)**: Stores user data persistently.

Separating these concerns allows them to be scaled independently.

### Database Options

#### Relational Databases (RDBMS)
- **Examples**: MySQL, Oracle, PostgreSQL.
- **Structure**: Tables and rows.
- **Key Feature**: SQL for data manipulation, supports joins.
- **Best for**: Structured data, complex relationships, ensuring data integrity (ACID properties).

#### Non-Relational Databases (NoSQL)
- **Examples**: CouchDB, Neo4j, Cassandra, DynamoDB.
- **Categories**: Key-value, Graph, Column, Document.
- **Key Feature**: Flexible schema, generally no joins.
- **Best for**: Super-low latency, unstructured data, massive scale, simple serialization (JSON/XML).

### Our Choice: PostgreSQL
We are choosing a **Relational Database (PostgreSQL)** for this project. It is a robust, open-source RDBMS that is widely used in the industry.

### Docker Compose as the "Second Server"
In our local development environment, we simulate a multi-server architecture using **Docker**.
- **Web Tier**: Our Node.js application running on the host machine (or in a container).
- **Data Tier**: The PostgreSQL database running in a Docker container.

`docker-compose.yml` orchestrates this "second server". It defines the database service, configures credentials, and manages storage volumes so our data persists even if the container crashes.
