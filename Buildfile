# code: language=makefile
# https://github.com/jeremija/Buildfile/

repo ?= docker.pkg.github.com/airtonix/zenobi.us
version ?= develop

dev:
  concurrently \
  "build site.dev" \
  "build storybook.dev"

site.dev:
  react-static start

site.stage:
  react-static build --staging

site.build:
  react-static build

site.bundle:
  react-static bundle

site.export:
  react-static export

storybook.serve: 
  serve dist \
  -p 9001 \
  -s \
  -c ./tools/storybook

storybook.dev:
  start-storybook \
  -p 9001 \
  --ci \
  -c ./tools/storybook

storybook.build:
  build-storybook \
  --config-dir ./tools/storybook \
  --output-dir ./dist/storybook

ci.setup:
  npm i -g buildfile concurrently

ci.build:
  build storybook.build
  build site.build

ci.deploy: ci.setup ci.build
  gh-pages \
  --dist dist \
  --add
  --repo=${repo}

docker.build:
  # pull the cached layers 
  docker pull ${repo}:builder || true

  # rebuild it. if nothing in these layers
  # have changes, this should be very fast.
  docker build \
  --cache-from ${repo}:builder \
  --file ./tools/docker/app/Dockerfile \
  --tag ${repo}:builder \
  --target install \
  .

  # # pull the latest image
  docker pull ${repo}:latest || true

  # rebuild it using cache layers from:
  # - builder
  # - latest
  docker build \
  --build-arg COMMIT=${version} \
  --cache-from ${repo}:builder \
  --cache-from ${repo}:latest \
  --file ./tools/docker/app/Dockerfile \
  --tag ${repo} \
  --target prod \
  .

docker.run:
  stage ?= 'local'
  docker-compose \
  -f docker-compose.yml \
  -f docker-compose--${stage}.yml \
  run --rm \
  ${service} ${command}

docker.up:
  stage ?= 'local'

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

done:
  echo "Done"