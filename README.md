# Personal Website

- docker
- nuxt
- vuex
- vue

## Use

1. have docker and docker-compose installed
2. have nodejs 8+ installed

```
$ git clone
$ npm install
$ npm run dev
```

## Release Process

### Website changes

__local__

1. make a branch `feature/X`.
2. edit source code or content.
3. commit regularly.
4. git push

__ci__

1. branch will be annotated with build results.
2. on passing, pull request to `master` branch.
3. merge.
4. new website build will be attempted.
5. on success, it will publish back to master branch `docs` directory.

### Docker image changes

__local__

1. merge `master` branch into `docker` branch.
2. modify `Dockerfile`, `package.json` to suit desired new modules.
3. git push
4. if ci builds fail, repeat steps 2 and 3 until they pass.
5. run `npm run docker:release` when they pass.

__ci__

`docker` branch with a `v.*` tag will trigger:

1. git checkout
2. docker-compose install
3. nodejs install
4. docker login ...
5. docker build ...
6. npm run generate
7. docker tag ...
8. docker push

__local__

1. merge `docker` into `master`
2. git push
