
# ChatApplication-MERN-Stack

## Description

**ChatApplication-MERN-Stack** is a real-time chat application built using the MERN (MongoDB, Express.js, React.js, and Node.js) stack. This application provides users with a seamless experience for creating chat rooms and sending messages in real time. It incorporates essential features like user authentication, chat room management, and a responsive UI.

---

## Features

- **Real-Time Communication**: Powered by WebSocket technology for instant messaging.
- **User Authentication**: Secure login and registration using JWT.
- **Chat Room Management**: Create and join multiple chat rooms.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Backend API**: RESTful APIs for efficient data handling and interaction.

---

## Tech Stack

### Frontend
- **React.js**: For building a dynamic user interface.
- **CSS**: Styling components for a modern and user-friendly look.

### Backend
- **Node.js**: Server-side runtime environment.
- **Express.js**: Backend framework for handling routes and APIs.

### Database
- **MongoDB**: NoSQL database for storing user and chat data.

---

## Installation and Usage

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/mdkaif10/ChatApplication-MERN-Stack.git
   cd ChatApplication-MERN-Stack
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   cd client
   npm install
   cd ..
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and configure:
   - `MONGO_URI`: Your MongoDB connection string.
   - `JWT_SECRET`: Secret key for JWT authentication.

4. **Run the Application**:
   ```bash
   npm run dev
   ```

5. **Access the Application**:
   Open `http://localhost:3000` in your browser.

---

## Folder Structure

```
ChatApplication-MERN-Stack/
├── client/               # React frontend
├── server/               # Node.js and Express backend
├── models/               # Mongoose models
├── routes/               # API routes
└── README.md             # Project documentation
```

---

## Future Enhancements

- Implementing chat notifications.
- Adding group chat functionality.
- Improving chat history storage.
- Enhancing UI/UX design for a smoother user experience.

---

## Contribution

Contributions are welcome! Feel free to fork the repository and submit pull requests.


