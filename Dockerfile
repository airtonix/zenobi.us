FROM node:8.9.0-alpine as builder

WORKDIR /app

RUN apk update && \
    apk upgrade && \
    apk add git

COPY ./package.json .
COPY ./package-lock.json .

FROM node:8.9.0-alpine

WORKDIR /app

COPY ./nuxt /app/nuxt
COPY ./bin /app/bin
COPY ./entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh
RUN npm install && \
    npm run build

ENV HOST 0.0.0.0
EXPOSE 3000

ENTRYPOINT [ "/entrypoint.sh" ]
CMD [ "npm", "start" ]