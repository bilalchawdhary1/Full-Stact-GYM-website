import { config } from 'dotenv';
import express, { Router } from 'express';
import cors from 'cors';
import { sendEmail } from './utils/sendMail.js';

// Load environment variables from .env file
config({ path:'./config/.env'});

// Initialize express app
const app = express();
const router = express.Router();

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
    methods: ["POST"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post('/send/mail', async(req, res, next) => {
    const { name, email, message } = req.body;
    if (!name ||!email ||!message) {
       return res.status(400).json({
            success: false,
            error: 'Please provide all fields',
        });
    }
    try {
        await sendEmail({
            email: "chawdharybilal73@gmail.com",
            subject: "GYM WEBSITE CONTACT",
            message,
            userEmail: email,
        });
        return res.status(200).json({
            success: true,
            message: "Message Sent Successfully.",
          });
    } catch (error) {
        return  res.status(500).json({
            success: false,
            message: " Internal Server Error oka",
        });
    }
});
app.use(router);
// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});