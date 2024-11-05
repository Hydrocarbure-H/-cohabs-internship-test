require('dotenv').config();

module.exports = {
    port: process.env.PORT,
    gpt_max_token_input: process.env.GPT_MAX_TOKENS_INPUT,
    openai_api_key: process.env.OPENAI_API_KEY,
    front_url: process.env.FRONT_URL,
};
