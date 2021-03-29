FROM node:12.18.3

RUN mkdir -p /app
WORKDIR /app

ADD . /app

RUN yarn

EXPOSE 3000