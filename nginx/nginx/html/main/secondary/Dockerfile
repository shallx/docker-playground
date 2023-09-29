FROM node:18.3.0-alpine3.14
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 7777
CMD ["npm", "start"]