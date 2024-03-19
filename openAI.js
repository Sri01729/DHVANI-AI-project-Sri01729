import { config } from 'dotenv'
config()
import { OpenAI } from 'openai'

const openai = new OpenAI({ apiKey: process.env.API_KEY });

openai.chat.completions.create({
    model: "gpt-4-0125-preview",
    messages: [
        { role: "user", content: "Hello ChatGPT, give me about boston dynamics" }
    ]
}).then(res => {
    console.log(res)
    res.choices.forEach(out => console.log(out.message));
});

// const chatWithOpenAI = (userMessage) => {
//     return openai.createChatCompletion({
//         model: "gpt-4-0125-preview", // As of the last update, "gpt-4-0125-preview" was not a recognized model. Adjust according to the actual available models.
//         messages: [
//             { role: "user", content: userMessage }
//         ]
//     }).then(res => {
//         console.log(res);
//         res.data.choices.forEach(out => console.log(out.message.text));
//         return res.data;
//     }).catch(error => {
//         console.error("Error interacting with OpenAI:", error);
//         throw error;
//     });
// };

// sendPromptToOpenAI('Tell me a joke.');
// export { chatWithOpenAI };
