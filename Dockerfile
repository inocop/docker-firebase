FROM node:8.11-alpine

MAINTAINER inocop

RUN npm install -g firebase-tools \
                   vue-cli
RUN apk update \
&&  apk add git \
            ncurses

CMD tail -f /dev/null
