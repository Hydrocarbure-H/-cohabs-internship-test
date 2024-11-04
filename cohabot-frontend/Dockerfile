# Build the frontend (can be done in a GitHub Action)
FROM node:lts-slim AS frontend-builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve the frontend on port 80
FROM nginx:alpine
COPY --from=frontend-builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

