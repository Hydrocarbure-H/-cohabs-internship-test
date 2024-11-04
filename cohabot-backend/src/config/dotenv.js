require('dotenv').config();

module.exports = {
    port: process.env.PORT,
    gpt_max_token_input: process.env.GPT_MAX_TOKENS_INPUT,
    gpt_api_key: process.env.GPT_API_KEY,
};
