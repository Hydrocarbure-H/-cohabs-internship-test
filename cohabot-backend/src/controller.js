const {generateResponse} = require('./service');
const {gpt_max_token_input} = require("./config/dotenv");

/**
 * Get the response from the chatbot
 * @param request
 * @param res
 * @returns {*}
 */
exports.getResponse = async (request, res) =>
{
    const userMessage = request.body.message;

    // Check if the message is missing
    if (!userMessage)
    {
        return res.status(400).json({error: "Your message seems to be empty."});
    }

    // Check if the message is not too long (ChatGPT costs limits)
    if (userMessage.length > gpt_max_token_input)
    {
        return res.status(400).json({error: "Your message is too long to be sent like this."});
    }

    try
    {
        // Generate the response asynchronously
        const response = await generateResponse(userMessage);
        res.json({response});
    }
    catch (error)
    {
        console.error("Error while generating chatbot response:", error.message);
        res.status(500).json({error: "An error occured while speaking to the FAQ agent. Please try again later."});
    }
};