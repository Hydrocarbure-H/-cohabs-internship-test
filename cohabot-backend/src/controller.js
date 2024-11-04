const { generateResponse } = require('./service');
const {gpt_max_token_input} = require("./config/dotenv");

/**
 * Get the response from the chatbot
 * @param request
 * @param res
 * @returns {*}
 */
exports.getResponse = (request, res) => {
    const userMessage = request.body.message;

    // Check if the message is missing
    if (!userMessage) {
        return res.status(400).json({ error: "Message is missing in your request" });
    }

    // Check if the message is not too long (ChatGPT costs limits)
    if (userMessage.length > gpt_max_token_input) {
        return res.status(400).json({ error: "Message trop long to be correctly treated" });
    }

    // Generate the response
    const response = generateResponse(userMessage);
    res.json({ response });
};
