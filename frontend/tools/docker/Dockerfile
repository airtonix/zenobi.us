FROM node:14-alpine as base

ENV PROJECT_DIR=/app

# 1. Solves `lscpu not found error with parcel`
#    https://github.com/parcel-bundler/parcel/issues/2555#issuecomment-457162656
WORKDIR /app
RUN apk --update --no-cache add \
     # 1. \/
     util-linux \
     bash \
     git \
     curl \
  && curl -sL https://taskfile.dev/install.sh | BINDIR=/bin sh


ENV ENTRYPOINT_TASKS_DIR=/entrypoint.d/

COPY ./tools/docker/entrypoint.sh /entrypoint.sh
COPY ./tools/docker/entrypoint.d/* /entrypoint.d/
RUN chmod +x /entrypoint.sh
RUN chmod +x /entrypoint.d/*

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

COPY --from=builder /build/node_modules /app/node_modules

COPY . ./

ARG COMMIT
ENV COMMIT=${COMMIT}

CMD ["yarn", "build", "site.build"]
