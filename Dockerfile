FROM node:18-alpine

EXPOSE 90
WORKDIR /user/src/app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY app.js .

ENTRYPOINT ["node", "app.js"]