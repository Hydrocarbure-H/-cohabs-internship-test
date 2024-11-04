const axios = require('axios');

/**
 * Ask ChatGPT a question and get an answer according to the FAQ
 * @param question
 * @returns {Promise<*|string>}
 */
async function askChatGpt(question) {
    try {
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
        if (!response.data.choices || response.data.choices.length === 0) {
            throw new Error("The response from ChatGPT is empty.");
        }

        // Return the answer
        return response.data.choices[0].message.content;

    } catch (error) {
        console.error("Error while calling ChatGPT :", error.message);
        return "An error occured while calling the FAQ Agent. Please try again later.";
    }
}
/**
 * Generate a response to a user message
 * @param message
 * @returns {string}
 */
exports.generateResponse = (message) => {
    // Ask ChatGPT a question and await the answer
   askChatGpt(message)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.error("Error while generating response :", error.message);
            return "An error occured while generating the response. Please try again later.";
        });
};
