# base image
FROM node:14-alpine
ARG ENV_NAME

WORKDIR /app
COPY package.json ./
COPY . .
RUN npm install
RUN npm run build:${ENV_NAME}

CMD ["npm", "run","start:server"]
EXPOSE 3000