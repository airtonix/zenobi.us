FROM node:14-alpine as base

# 1. Solves `lscpu not found error with parcel`
#    https://github.com/parcel-bundler/parcel/issues/2555#issuecomment-457162656
RUN apk --update --no-cache add \
     # 1. \/
     util-linux \
     bash \
     git \
     curl \
     su-exec \
  && curl -sL https://taskfile.dev/install.sh | BINDIR=/bin sh


ENV ENTRYPOINT_TASKS_DIR=/entrypoint.d/

COPY ./tools/docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]

#
#
#
FROM base as builder

WORKDIR /build

COPY ./package.json \
     ./yarn.lock \
     ./

RUN yarn install

#
#
#
FROM base as prod

COPY ./tools/docker/entrypoint.d/* /entrypoint.d/
RUN chmod +x /entrypoint.d/*

ARG USER_NAME=node

RUN mkdir /app && \
    chown ${USER_NAME}:${USER_NAME} /app

WORKDIR /app

COPY --from=builder \
     --chown=$USER_NAME \
     /build/node_modules \
     /app/node_modules

COPY --chown=$USER_NAME \
     . \
     ./

ENV USER_NAME=${USER_NAME}
ARG COMMIT
ENV COMMIT=${COMMIT}