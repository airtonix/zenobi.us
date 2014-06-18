---
template: article.jade
title: Winetricks Verb, Arma 2 Server
tags: wine, linux, games, arma2, dayz
date: May 25, 2014
icon: gamepad
comments: true
---

### What

It's a wineverb for usage with winetricks. Basically it reduces a long set of specific steps usually required to setup a prefix/bottle/sandbox for specific programs.

In this case, it's for setting up an Arma 2 Server (mainly for Dayz) under Linux.


### Why

Dayz. because .Net 3 isn't always strait forward to install under Wine


### How

```
$ export VERBS=~/.local/share/winetricks/verbs/
$ git clone https://github.com/airtonix/wine-verb-arma2server.git $VERBS/arma2-server
$ winetricks prefix=dayz-server $VERBS/arma2-server/arma2-server.verb
```
