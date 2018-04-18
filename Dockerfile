FROM node:8.9.0-alpine as builder

WORKDIR /build

RUN apk add --no-cache \
  autoconf \
  automake \
  ca-certificates \
  curl \
  g++ \
  gcc \
  git \
  jpeg-dev \
  jq \
  make \
  nasm \
  openssh \
  openssl \
  python \
  run-parts \
  zlib-dev \
 && update-ca-certificates

RUN npm install -g node-gyp

COPY ./package.json .
COPY ./package-lock.json .
RUN npm install


FROM node:8.9.0-alpine

WORKDIR /app

COPY --from=builder /build/node_modules /app/node_modules
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
CMD [ "npx", "nuxt", "--config=/app/project/nuxt.config.js" ]

