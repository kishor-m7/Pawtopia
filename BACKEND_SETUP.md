# Backend Setup Guide

## Prerequisites
- Ensure you have the following installed:
  - Node.js (v12 or higher)
  - MongoDB (v4.0 or higher)
  - npm (Node Package Manager)

## Installation Steps
1. **Clone the Repository**  
   Run the following command to clone the repository:
   ```bash
   git clone https://github.com/kishor-m7/Pawtopia.git
   cd Pawtopia
   ```  

2. **Install Dependencies**  
   Navigate to the backend directory and install the dependencies:
   ```bash
   cd backend
   npm install
   ```

3. **Setup Environment Variables**  
   Create a `.env` file in the backend directory and add the following variables:
   ```bash
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/pawtopia
   JWT_SECRET=your_jwt_secret
   ```

4. **Run Database Migrations**  
   If necessary, run the database migrations:
   ```bash
   npm run migrate
   ```

5. **Start the Server**  
   Start the backend server using the command:
   ```bash
   npm start
   ```

6. **API Testing**  
   You can use Postman to test the API endpoints:
   - `GET /api/pets`
   - `POST /api/pets`
   
## Conclusion
You should now have the backend setup and running. For further configuration and management, please refer to the API documentation.
