const axios = require('axios');
const {gpt_prompt} = require('./config/prompt');

/**
 * Ask ChatGPT a question and get an answer according to the FAQ
 * @param question
 * @returns {Promise<*|string>}
 */
async function askChatGpt(question)
{
    try
    {
        // Call the OpenAI API
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-4',
                messages: [
                    {
                        role: 'user',
                        content: gpt_prompt + question,
                    },
                ],
                max_tokens: 150,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                },
            }
        );

        // Check if the response is not empty
        if (!response.data.choices || response.data.choices.length === 0)
        {
            throw new Error("The response from ChatGPT is empty.");
        }

        // Return the answer
        return response.data.choices[0].message.content;

    }
    catch (error)
    {
        console.error("Error while calling ChatGPT :", error.message);
        return "An error occured while calling the FAQ Agent. Please try again later.";
    }
}

/**
 * Generate a response to a user message
 * @param message
 * @returns {string}
 */
exports.generateResponse = async (message) =>
{
    try
    {
        // Await the answer from ChatGPT
        const response = await askChatGpt(message);
        // Sleep for 3 seconds
        // await new Promise(resolve => setTimeout(resolve, 3000));
        // const response = "This is a response from the backend. And this is a test message.";
        console.log("Response generated:", response);
        return response;
    }
    catch (error)
    {
        console.error("Error while generating response:", error.message);
        return "An error occurred while generating the response. Please try again later.";
    }
};
