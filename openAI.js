import openai from './config/openAI.js';
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
sendMessageToOpenAI("Hello ChatGPT, what is the capital of India?");

module.exports.sendMessageToOpenAI = sendMessageToOpenAI;
export { sendMessageToOpenAI };