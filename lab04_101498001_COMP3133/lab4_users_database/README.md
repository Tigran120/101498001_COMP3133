# Lab 4 - Users Database (Node.js + Express + MongoDB + Mongoose)

## Setup

1. **Install dependencies** (from project folder):
   ```bash
   npm install
   ```

2. **MongoDB Atlas**
   - Create a cluster at [MongoDB Atlas](https://account.mongodb.com/account/login)
   - Get your connection string and set it in a `.env` file:
     ```
     MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/lab4_users_db?retryWrites=true&w=majority
     PORT=8081
     ```
   - Or run without `.env`: the app defaults to `mongodb://localhost:27017/lab4_users_db` and port `8081`.

3. **Start the server**:
   ```bash
   npm start
   ```
   Server runs at **http://localhost:8081**

## API

### POST http://localhost:8081/users

Insert a user. Request body (JSON):

| Field    | Required | Validation |
|----------|----------|------------|
| username | Yes      | Min 4, max 100 characters |
| email    | Yes      | Unique, valid email |
| city     | Yes      | Alphabets and spaces only |
| website  | Yes      | Valid http or https URL |
| zipCode  | Yes      | Format: DDDDD-DDDD (e.g. 12345-1234) |
| phone    | Yes      | Format: D-DDD-DDD-DDDD (e.g. 1-123-123-1234) |

**Example valid body** (from `UserData.json`):
```json
{
  "username": "johndoe",
  "email": "john.doe@example.com",
  "city": "New York",
  "website": "https://johndoe.example.com",
  "zipCode": "10001-1234",
  "phone": "1-212-555-1234"
}
```

## Testing with Postman

1. Method: **POST**
2. URL: `http://localhost:8081/users`
3. Headers: `Content-Type: application/json`
4. Body: raw JSON (use one object from `UserData.json` or the example above)

For validation screenshots, try invalid data (e.g. short username, invalid email, wrong zip/phone format, non-https URL, city with numbers) and capture the 400 response with the `errors` object.

## Schema Reference

The User schema is defined in `models/User.js` and matches the structure in `UserData.json`.

## Submission Notes

- Delete `node_modules` before zipping the project.
- Submit screenshots (e.g. in a Word document) showing Postman requests and validation error responses.
- Submit the GitHub project link.
