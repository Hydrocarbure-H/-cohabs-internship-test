/**
 * Generate a response to a user message
 * @param message
 * @returns {string}
 */
exports.generateResponse = (message) => {
    // TODO:
    // Send the message directly to ChatGPT and return, according to the response, the appropriate message
    // based on the given FAQ.
    if (message.toLowerCase().includes("payments")) {
        return "Everything about our payments can be found on our website !";
    }

    return "I don't understand your question, can you be more specific ?";
};
