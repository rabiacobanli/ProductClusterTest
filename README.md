# Product Cluster Test Project

This project is a web application for product management using MongoDB. It has been developed following Clean Architecture principles, built with .NET Core 8 Web API and React.

## API Endpoints

- `POST /api/product`: Add new product
- `GET /api/product/{price}`: Get products by exact price

## Project Setup

### Step 1: MongoDB Product Cluster
- Set up a MongoDB cluster and obtain the connection URL.

### Step 2: Connect to the Database
- Use the MongoDB connection URL string in the project's configuration file to link the database.

### Step 3: Product Structure
Each product document in MongoDB should include:
  - `name`: `String`
  - `price`: `Number`
  - `added_at`: `Date`

### Step 4: API Routes
- **GET /product/:price**: Retrieve all products with an exact price.
- **POST /product**: Add a new product to the cluster.

### Step 5: Frontend UI
Create a form and a table display for products:
- Form with:
  - **Product Name** input
  - **Product Price** input
  - **Submit** button
- Table display with:
  - **Product Name**
  - **Product Price**
  - **Created Date**
- Include a search field above the table to filter products by exact price.