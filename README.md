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

## How to Run the Project

### Prerequisites

- **Docker**: Make sure Docker is installed and running on your machine.
- **Environment Variables**: Set up the required environment variables in a `.env` file in the root directory of the backend.

### Environment Variables

Create a `.env` file in the backend directory (`cohabot-backend`) with the following content:

```plaintext
PORT=3001
GPT_MAX_TOKENS_INPUT=100
OPENAI_API_KEY=your-openai-key
FRONT_URL=http://localhost:3000
PROMPT_MODE=local # or 'internet'. see Features section below. local == precise mode, internet == general mode
```

### Running the Project

1. **Clone the Repository**: Make sure you have cloned the repository and are in the project’s root directory.

2. **Build and Run with Docker Compose**:
   Run the following command to build and start the containers for both frontend and backend:

   ```bash
   docker-compose up --build
   ```

   This command will:
    - Build the frontend and backend images from the Dockerfiles in their respective directories (`cohabot-frontend` and `cohabot-backend`).
    - Expose the frontend on `http://localhost:3000` and the backend on `http://localhost:3001`.

3. **Access the Application**:
    - **Frontend**: Open [http://localhost:3000](http://localhost:3000) in your browser.
    - **Backend**: The backend API is accessible at [http://localhost:3001](http://localhost:3001).


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

### Multilingual support

![image](https://github.com/user-attachments/assets/d9bd9d57-c598-4a00-8957-5628e17163b3)
