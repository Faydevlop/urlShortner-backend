

```markdown
# URL Shortener Project

A simple, scalable, and modern URL shortener built using Node.js and Express. This project allows users to shorten long URLs and redirect them to the original URLs efficiently.

## Features

- **Shorten URLs**: Users can shorten any long URL.
- **Custom Aliases**: Allows users to create custom aliases for shortened URLs.
- **URL Redirects**: Redirect users to the original URL when accessing a shortened URL.
- **Basic Analytics**: Track how many times a shortened URL has been accessed.
- **RESTful API**: Provides a simple API to shorten URLs programmatically.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (using Mongoose for schema)
- **Authentication**: Optional JWT-based authentication (for advanced features)
- **Environment Variables**: dotenv for managing configurations
- **Validation**: js Validator for input validation
- **URL Encoding**: crypto encoding for generating short URLs

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Faydevlop/urlShortner-backend
   cd urlShortner-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory with the following variables:

   ```bash
   MONGODB_URI=mongodb://localhost:27017/urlshortener
   PORT=5000
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The app will be running on `http://localhost:5000`.

## API Endpoints

### 1. **POST** `/api/shortURL`
Shorten a URL.

**Request Body**:

```json
{
  "longUrl": "https://example.com"
}
```

**Response**:

```json
{
  "shortUrl": "http://localhost:5000/abc123",
  "longUrl": "https://example.com"
}
```

### 2. **GET** `/api/:shortCode`
Redirect to the original URL.

**Parameters**:

- `shortCode`: The short code of the URL (e.g., `abc123`).

**Response**:

- Redirects to the original URL (`https://example.com`).

## Frontend (Optional)

This project is intended to be used with any frontend framework, but you can also integrate it with a simple HTML, CSS, and JavaScript frontend. 

Example:

- **React**: For building a dynamic frontend where users can input URLs and see shortened results.

## Acknowledgements

- **Express.js** for providing a fast and minimalist web framework for Node.js.
- **MongoDB** for storing URL data.
- **Base62** for URL encoding.
- Inspiration from other URL shortening services like Bit.ly, TinyURL, etc.

---

Created with ❤️ by [Fayis Nambiyath](https://github.com/Faydevlop)
```

### Key Features:
1. **Modern Layout**: The use of sections such as "Features", "Tech Stack", and "Contributing" make the README easy to navigate.
2. **Visual Elements**: You can add a logo image to the project to make it visually appealing.
3. **API Documentation**: The request and response examples for the API endpoints help the users understand how the system works.
4. **Installation Steps**: Clear instructions on how to set up and run the project locally.
5. **Environment Variables**: Essential for managing sensitive data like database URLs and JWT secrets.

## AI Models Used

This project leverages AI models from **OpenAI** and **V0.dev** for reference and model building:

- **OpenAI**: Utilized OpenAI’s models for generating intelligent insights, processing natural language input, and integrating AI-driven features.
- **V0.dev**: Incorporated V0.dev’s AI models to enhance functionality and accelerate development of the URL shortener, focusing on scalability and performance.

Thank you to **OpenAI** and **V0.dev** for their powerful tools and resources.


