FROM node:22-alpine
COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm ci

CMD ["node", "app.js"]