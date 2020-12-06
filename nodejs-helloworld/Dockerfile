FROM ubi8/nodejs-10

MAINTAINER Adrian Hammond ,adrian.hammond@redhat.com>

LABEL Description="Sample nodjs helloworld app"

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 8080

CMD ["node", "app.js"]