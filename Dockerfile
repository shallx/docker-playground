FROM node:alpine
WORKDIR /app
COPY package*.json .

ARG NODE_ENV # production or development
RUN if [ $NODE_ENV = "development" ]; \
    then npm install; \
    else npm install --only=production; \ 
    fi

COPY . .
ENV PORT 3000
EXPOSE ${PORT}
CMD ["npm", "run", "dev"]