# code: language=makefile
# https://github.com/jeremija/Buildfile/

repo ?= docker.pkg.github.com/airtonix/zenobi.us
version ?= develop
service ?= app
stage ?= local

dev.setup: ci.setup

ci.setup:
  npm i -g \
  buildfile \
  concurrently \
  gh-pages

ci.build:
  build docker.run \
  --stage=ci \
  --service=${service} \
  --command="build prod"

ci.deploy: ci.setup ci.build
  gh-pages \
  --dist dist \
  --add
  --repo=${repo}

#
# Docker Utilities
#

# Build Docker Image
# @param {string} repo - name of the docker repo
# @param {string} service
#   name of the service to build.
#   This is the folder found:
#     - ./<service>
docker.build:
  # pull the cached layers 
  docker pull ${repo}:builder || true

  # rebuild it. if nothing in these layers
  # have changes, this should be very fast.
  docker build \
  --cache-from ${repo}:builder \
  --file ./${service}/tools/docker/Dockerfile \
  --tag ${repo}:builder \
  --target install \
  ./${service}

  # # pull the latest image
  docker pull ${repo}:latest || true

  # rebuild it using cache layers from:
  # - builder
  # - latest
  docker build \
  --build-arg COMMIT=${version} \
  --cache-from ${repo}:builder \
  --cache-from ${repo}:latest \
  --file ./${service}/tools/docker/Dockerfile \
  --tag ${repo} \
  --target prod \
  ./${service}

# Run a command in a container using a service image
# @param {string} stage - Which compose file layer to add
# @param {string} service - service to run
# @param {string} command - what to run
docker.run:
  docker-compose \
  -f docker-compose.yml \
  -f docker-compose--${stage:local}.yml \
  run --rm \
  ${service} ${command}

# Bring the whole stack up with services
# @param {string} stage - Which compose file layer to add
# @param {string} services - services to bring up
docker.up:
  docker-compose \
  -f docker-compose.yml \
  -f docker-compose--${stage}.yml \
  up ${services}

docker.publish:
  docker tag ${image} ${tag}
  docker push ${tag}

docker.templates: docker.templates.*
docker.templates.base:
  build env.template \
  infile=./tools/docker/docker-compose.yml \
  outfile=./docker-compose.yml

docker.templates.local:
  build env.template \
  infile=./tools/docker/docker-compose--local.yml \
  outfile=./docker-compose--local.yml

docker.templates.ci:
  build env.template \
  infile=./tools/docker/docker-compose--ci.yml \
  outfile=./docker-compose--ci.yml


#
# Template a file with env vars
#
env.template:
  docker run --rm \
  -v "${PWD}:/tmp" \
  -e repo=${repo} \
  -e version=${version} \
  supinf/envsubst \
  /tmp/${infile} > ./${outfile}
