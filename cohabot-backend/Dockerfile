FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
# Serve the backend on the 3001 port
CMD ["npm", "start"]

