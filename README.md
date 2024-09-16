 ............Build a simple stateless microservice with few API endpoints..........
● Authentication endpoint
● REST API endpoints for a survey app 


<To build a simple stateless microservice with Node.js, we'll create a microservice that includes:>

Authentication Endpoint: For user login, we'll use a simple JWT-based authentication.
Survey REST API Endpoints: Create endpoints for managing surveys (CRUD operations).

We'll use the following tools:

->Node.js with Express.js for handling HTTP requests.
->JWT for token-based authentication.
->MongoDB or any in-memory storage (e.g., an array) for survey data storage.
           1.Create the folder structure
           2.app.js - Main entry point
           3.Authentication (JWT)
           4.Middleware for authentication
           5.Survey Management Endpoints (CRUD)
           6.Testing the Microservice

........... Authentication endpoint:..................
○ This will be a public endpoint.
○ The request body will contain an arbitrary username/password pair.
Note:
Treat it as a mock authentication service and accept any username and
password.
○ Return a signed JSON Web tok

Access the API
=> Your server will be running on http://localhost:3000 by default.
Signup:
=>Send a POST request to http://localhost:3000/api/auth/signup with JSON data
Login:
=>Send a POST request to http://localhost:3000/api/auth/login with the same credentials


............ Survey REST API endpoints:............
○ The following endpoints should be protected. The JWT obtained in the
○ The “Authentication” endpoint will be attached to each request. If the JWT is
○ missing or invalid these endpoints should reject the request.


Create Survey:
=>Send a POST request to http://localhost:3000/api/surveys with the Authorization header and survey data:
Get All Surveys: 
=>Send a GET request to http://localhost:3000/api/surveys with the Authorization header.
Update Survey: 
=>Send a PUT request to http://localhost:3000/api/surveys/:id (replace :id with the survey ID) with updated survey data and the Authorization header.
Delete Survey: 
=>Send a DELETE request to http://localhost:3000/api/surveys/:id (replace :id with the survey ID) with the Authorization header.


