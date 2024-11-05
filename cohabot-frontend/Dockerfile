FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
# Serve the backend on the 3000 port and allow 0.0.0.0
CMD ["npm", "start"]

