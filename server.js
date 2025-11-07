const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const port = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("production"));

app.use("/", router);

router.post("/recaptcha", async (req, res) => {
    const { token } = req.body;

    try {
        // Sending secret key and response token to Google Recaptcha API for authentication.
        const response = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
        );

        // Check response status and send back to the client-side
        if (response.data.success) {
            res.send("Human 👨 👩");
        } else {
            res.send("Robot 🤖");
        }
    } catch (error) {
        // Handle any errors that occur during the reCAPTCHA verification process
        res.status(500).send("Error verifying reCAPTCHA");
    }
});

if (!module.parent) {
    app.listen(port);
}

module.exports = app;

console.log("Server running on port " + port);
