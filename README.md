# Cohabot

## Overview

Cohabot is an intelligent FAQ chatbot designed to assist users in finding information about Cohabs. The chatbot
leverages OpenAI's ChatGPT API to answer questions about Cohabs, providing accurate and relevant responses based on
either general knowledge or specific documentation from Cohabs' FAQ. This solution is completely multilingual,
automatically responding in the language in which the question is asked.

## Features

- **Two Operational Modes**:
    - **General Mode (Cost-Efficient)**: This mode allows ChatGPT to answer questions based on its pre-existing
      knowledge, which includes information about Cohabs up to the model’s training cut-off date. This mode is
      cost-effective as it requires minimal input tokens, using only the question and a brief prompt to guide ChatGPT’s
      responses.
    - **Precise Mode (Documentation-Based)**: This mode provides highly accurate answers by feeding the chatbot the
      entire FAQ documentation each time a question is asked. ChatGPT bases its response directly on the latest
      information from the FAQ, ensuring up-to-date and specific answers. However, this mode is more costly as it
      involves a significantly larger token input due to the inclusion of the complete documentation in each query.

- **Multilingual Support**: Cohabot automatically detects the language of the question and responds in the same
  language, without any additional settings required. It supports seamless multilingual interactions.

## Usage & Deployment

TODO: Add instructions on how to use and deploy the application.
Currently, the application does not allow switching between the two modes through the user interface. Mode selection is
handled at the backend level, but this may change in future updates to make mode selection available to end users.

## Cost Comparison

Here’s an approximate cost analysis for each mode based on token usage with the OpenAI GPT-4o API.

- **General Mode**: For a single question with a brief prompt (10 lines), this mode generates a small number of tokens
  for the input, resulting in a minimal cost per request.
- **Precise Mode**: With documentation of 150 lines plus the question, the token count is significantly higher, making
  the cost per request notably higher.

### Example Cost Calculation

To help visualize the difference:

- **General Mode**: Roughly 10 lines in the prompt and a single question might generate around 50-100 tokens per
  request (about 0,0027€/request).
- **Precise Mode**: Including 150 lines of documentation plus a question could generate approximately 1,000-2,000 tokens
  per request (about 0,054€/request).

Using the GPT-4 pricing structure, you can estimate the cost difference between these two modes depending on usage and
token consumption.

## Installation

1. Clone this repository.
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Configure your OpenAI API key in the environment file.
4. Start the application:
   ```bash
   npm start
   ```

--- 

# History in screenshots

## Backend

![image](https://github.com/user-attachments/assets/c9412c05-85d5-4a46-9195-c09d1d313f30)

## Frontend

### First version

![image](https://github.com/user-attachments/assets/5bd80652-8529-445b-b0ab-3970a07d0ca5)

### Cohabs Design

Implementing colors according to the Cohabs design. Adding the ability for the user to ask some out-of-context questions
and the bot will not answer them.
![image](https://github.com/user-attachments/assets/b8b8bd51-6f92-4b33-a04b-2449941d1030)

