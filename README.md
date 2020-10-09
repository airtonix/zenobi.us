# Personal Website

Tech:
- docker
- docker-compose
- sass
- react
- mdx
- gatsby

## Use

1. have docker and docker-compose installed
2. have nodejs 8+ installed
3. have [taskfile.dev](https://taskfile.dev) installed

```
$ git clone THISREPO#THISBRANCH ./zenobi.us
$ cd zenobi.us
$ task setup
$ task dev
```

**ProTip**

- use `vscode` and `vscode-remote-containers`

## Release Process

1. be on feature branch
2. commit and push, create pull request
3. merge into master

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
5. on success, it will publish back to `gh-pages` branch.

### Docker image changes

__local__

1. `task frontend.shell`.
2. `yarn add` any new modules.
3. exit container
4. `task create`

__ci__

- docker image will be created on merge to master
- docker-compose*.yml will be updated to point at new images
- docker images are stored at https://github.com/airtonix/zenobiu.us/packages
