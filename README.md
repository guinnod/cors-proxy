# Simple CORS Proxy Server

This project sets up a simple proxy server using Node.js and Express, which allows you to make GET requests to any website from your browser, bypassing Cross-Origin Resource Sharing (CORS) restrictions.

## Features

- Avoid CORS issues when accessing resources from different domains in development.
- Simple and easy to extend for other HTTP methods if needed.

## Technologies Used

- Node.js
- Express.js
- Axios for HTTP requests
- CORS middleware

## Usage
To use the proxy, make a GET request to the /proxy endpoint with the target URL as a query parameter:

```bash
https://[your_host]/proxy?url=[url_to_fetch]
```
