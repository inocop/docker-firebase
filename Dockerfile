FROM node:8.11-alpine

MAINTAINER inocop

RUN npm install -g firebase-tools

CMD tail -f /dev/null
