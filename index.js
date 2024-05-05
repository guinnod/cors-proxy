const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.get("/proxy", async (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).send("URL parameter is required");
    }

    try {
        const response = await axios.get(url, {
            responseType: "arraybuffer",
        });
        const contentType = response.headers["content-type"];

        res.setHeader("Content-Type", contentType);
        res.send(response.data);
    } catch (error) {
        console.error("Failed to fetch data:", error);
        res.status(500).send("Failed to fetch data");
    }
});

app.listen(port, () => {
    console.log(`CORS Proxy server running at port: ${port}`);
});
