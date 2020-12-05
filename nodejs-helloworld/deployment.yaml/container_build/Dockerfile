FROM ubi7/nodejs-12

MAINTAINER Adrian Hammond <adrian.hammond@redhat.com>

LABEL description= " A simple nodejs HellWorld application "

# Add application sources
WORKDIR /Users/adrianhammond/code/adrianhammond/demo-apps/nodejs-helloworld/nodejs-helloworld-app .

COPY package*.json index.js /.

# Install the dependencies
RUN npm install

EXPOSE 8080

# Run script uses standard ways to run the application
CMD ["node", "index.js"]