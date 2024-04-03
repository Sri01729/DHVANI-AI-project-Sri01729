import openai from './config/openAI.js';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// const express = require('express');
// const path = require('path');

const app = express();

// ES Modules fix for __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/api/location', async (req, res) => {
    try {
        // Assuming you get a userMessage from query params or defaulting to a predefined question
        const userMessage = "Hello ChatGPT, can you give me information about artists and cultural music in Courtenay?";

        const message = await sendMessageToOpenAI(userMessage);
        res.json({ message });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch data from OpenAI" });
    }
});

app.listen(8080, () => {
    console.log('listening on 8080 port');
});

function sendMessageToOpenAI(userMessage) {
    openai.chat.completions.create({
        model: "gpt-4-0125-preview",
        messages: [
            { role: "user", content: userMessage }
        ]
    }).then(res => {

        const messagesContent = res.choices.map(choice => choice.message.content);
        console.log(messagesContent[0]);
        return messagesContent[0];

    }).catch(error => {
        console.error("Error from OpenAI:", error);
        throw error;
    });
}

// Example usage of the function
// sendMessageToOpenAI("Hello ChatGPT, can you give me the information about artists and ciultural music in courtenay?");

// module.exports.sendMessageToOpenAI = sendMessageToOpenAI;
// export { sendMessageToOpenAI };