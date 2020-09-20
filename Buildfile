# code: language=makefile
version ?= 'develop'
repo ?= 'docker.pkg.github.com/airtonix/zenobi.us'
source ?= '.'

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
  -c ./tools/storybook

docker.build:
  # pull the cached layers 
  docker pull ${repo}:builder || true

  # rebuild it. if nothing in these layers
  # have changes, this should be very fast.
  docker build \
  --cache-from ${repo}:builder \
  --file ./${source}/Dockerfile \
  --tag ${repo}:builder \ 
  --target install \
  ./${source}

  # # pull the latest image
  docker pull ${repo}:latest || true

  # rebuild it using cache layers from:
  # - builder
  # - latest
  docker build \
  --build-arg COMMIT=${version} \
  --cache-from ${repo}:builder \
  --cache-from ${repo}:latest \
  --file ./${source}/Dockerfile \
  --tag ${repo} \
  --target prod \
  ./${source}

docker.run:
  docker-compose \
  -f docker-compose.yml \
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