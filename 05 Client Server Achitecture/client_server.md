# Client-Server Architecture

In client-server architecture, there are two main components: the client and the server.

### Client

The client refers to the user-facing interactive end, commonly known as the frontend. It is the part of the system that users directly interact with.

### Server

The server is a hardware or computer that provides services to other computer programs or different machines. It is responsible for processing requests from clients and returning the requested data or performing the requested actions.

### Connecting the Client with the Server

The connection between the client and the server is established through an API (Application Programming Interface).

### API

API stands for Application Programming Interface. In simple terms, it is a contract between the frontend/client and the backend/server.

### API Contract

The API contract specifies:

- The URL to hit
- The type of request to be made
- The data to be sent
- And other relevant details

There are various conventions for writing APIs, including:

- REST (Representational State Transfer)
- SOAP (Simple Object Access Protocol)
- gRPC (Google Remote Procedure Call)

Let's focus on REST APIs.

### REST APIs

REST APIs (Representational State Transfer) consider every real-life entity as a resource. When making requests to a RESTful API, the request type must be specified.

The request types in REST APIs are as follows:

- GET: Retrieve information about a resource.
- DELETE: Delete a resource.
- PATCH: Make a partial update to a resource.
- PUT: Make a complete update to a resource.
- POST: Create a side effect on a resource.

## Difference between GET and POST requests:

- GET: Data is sent in the URL, which means it gets saved in the browser history and can be logged.
- POST: General data is not expected to be sent in the URL but rather in the request body/payload. It is more secure than a GET request.

### Three ways of sending data in a REST API:

1. Request Parameters: Parameters sent as part of the request URL.
2. Query Parameters: Parameters appended to the URL after a question mark, typically used for filtering or sorting.
3. Request Body: Data sent as part of the request payload/body, often in JSON format.

Note:

- In the REST convention, data/messages apart from the URL are sent in JSON format.
- HTML only supports GET and POST requests.

### Examples of sending data in REST APIs:

1. Request Parameters:

URL: `https://api.example.com/users?id=123`

In this example, the data is sent as a request parameter (`id`) in the URL. The server can retrieve the value of the `id` parameter to identify and process the request accordingly.

2. Query Parameters:

URL: `https://api.example.com/products?category=electronics&price_range=100-500`

Here, the data is sent as query parameters (`category` and `price_range`) appended to the URL. The server can extract these parameters to filter the products based on the specified category and price range.

3. Request Body:

URL: `https://api.example.com/users`

Request Body (JSON):

```
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "age": 30
}
```

In this case, the data is sent in the request body. The server expects the data to be in JSON format. The example shows a user creation request, where the client provides the user's name, email, and age as a JSON object in the request body.

These examples demonstrate different ways of sending data in REST APIs. The appropriate method to use depends on the specific requirements and the type of data being transmitted.

## Difference between Monolithic and Microservice Architecture:

Monolithic Architecture:

- The entire application is built as a single, self-contained unit.
- All components are tightly coupled, making it difficult to scale or modify individual parts.
- A single failure can bring down the entire system.

Microservice Architecture:

- The application is broken down into smaller, independent services that communicate with each other.
- Each service can be developed, deployed, and scaled independently.
- Failures are isolated to individual services, reducing the impact on the overall system.

## Conclusion:

In client-server architecture, the client and server are the main components. They connect through APIs, which serve as a contract between the frontend/client and the backend/server. REST APIs are a popular choice, treating real-life entities as resources and utilizing different request types. Monolithic architecture involves building a single unit, while microservice architecture breaks the application into independent services.
