---
title: Reducing Risk in Frontend Development with Docker
stage: draft
tags: nodejs, docker, frontend
comments: true
theme: queenblue
banner: https://media.giphy.com/media/9MPqCXXJ2cPQY/giphy.gif
---

You and your team have been working on a website for the last couple of weeks, everything is good. But now there's a new team member and they need to get their machine setup.

Perhaps you'd goto to the NodeJS website and download whatever version, run the installer and attempt to install the tools for your project.

Or maybe you've discovered that you need a better way to manage the versions of nodejs you need. So you go an install Nodist or Nvm depending on your operating system.

Then you'd try and install the projects tools, because you're a smart cookie you've described all this in your `package.json`. Hopeful faces abound as you run `npm install`.

But now you're experiencing mysterious installation issues, pngquant won't install for some reason, node-sass can't find some binding thing, and there's a problem with something being too long.

If only there was a more reliable way to get a new team member up and running with the project, A way to ensure that your project doesn't rely on 3rd party repositories to make a build.

There is, here's what I've learnt.

## Engine Version Managers

New nodejs versions are released frequently, mostly with new shiny features.

So you'd have to ensure that once you got everything working, that you also specified what version of node to use.

They work nicely on macosx and linux, because bash is awesome. but bash doesn't exist on windows... so yeah, you'll be managing two sets of manifests to describe the environment.


## Virtual Machines

Five years ago, teams working on Django, Symphony, Ruby on Rails or Laravel would use something like Virtualbox (kvm, VMWare, etc) to bake an operating system, the project and its dependencies. You'd end up with an image that could be anywhere from 1-4gb depending on your choice of operating system.

Windows and .Net developers however seem to handle this differently. I've never met or heard of anyone in that area creating a virtual machine containing Windows, IIS and MSSQL, probably because they're used to downloading and storing dependencies in their project since the dawn of time, or more likely because such an image would end up being 20-60gb.

If you didn't use Vagrant, your virtual machine image is now ready for use.

I actually used Vagrant in the past to simulate my production environment while coding. It's great way to be exposed to production problems sooner, which means you won't code your self into a corner because you didn't realise x library doesn't communicate across the network layer.

But it's slow. start up times are slow, host <-> vm file sync is slow and tricky and running even one vm uses up huge amounts of host memory.


## Primary Risks

Show stoppers I've encountered:

* package author removes their package from npm (padleft)
* packages have post install compile steps, which the package author isn't mitigating or hasn't tested. Post build step performs network operations *will* fail.
* Our internet connection died because Telstra technician unilaterally decides to unplug our router/modem
* Some problem with intermediate caching on our machines is causing an incorrect package to be installed.
* Python wasn't installed, so node-gyp doesn't run, so can't install node-sass.
* Node-gyp wasn't installed globally.
* Random version of MSbuild wasn't installed, some post install build process defined a node-gyp step that requires it.
* Git wasn't installed, or more precisely it was un-installed and team member decided that source tree internal git over http was good enough.
* Some post build processes attempt to clean-up, but can't because some aspects of windows don't like paths longer than 256 characters.
* Package author doesn't like windows, won't account for it and is hostile to any suggestions that their architecture contributes to the monumental amount of bug tickets regarding installation of their package.

These are just the ones I can remember, but to narrow them down into defined domains lets call them:

- "hostile deprecation"
- "network dependant"
- "ignorant post installation"
- "obscure system requirements"


### Hostile Deprecation

every time you `npm i` or `pip install` or `bundle install` or `nuget install` you're at the mercy of people like the author of `pad-left` or `imagemin`.

Some of these authors are doe eyed enthusiastic people, they've yet to encounter what a colleague of mine explained to me as:

We are like diamonds, slowly eroded by the persistent drips of reality into thin lubricating substance that keeps software running smoothly.
_-- Anon Colleague_ <!-- {p:.quote} -->

What's that? you can't install a package and you have to create a prod build for deployment in an hour... oh what a shame.

## Where to from here?

Over the last two years at Fusion, I've had to move outside the well crafted world of linux into that of MacOSx and Windows 7 and 10. Each of these systems have different ways of doing things on the filesystem, they have different ways of interpreting code and while NodeJS claims to be cross-platform (and it is), the reality is that most module authors are on linux or macosx, the automated tests they write rarely run cross platform or on multiple versions of node.

As a frontend developer there are some things I've learnt with regards to the tooling we use, the solutions I came up with as I reached our current game plan were influenced by what I learnt while commercially developing Django projects.
