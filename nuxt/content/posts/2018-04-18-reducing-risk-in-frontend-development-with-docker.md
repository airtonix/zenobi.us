---
title: Reducing Risk in Frontend Development with Docker
tags: nodejs, docker, frontend
comments: true
---

Over the last two years at Fusion, I've had to move outside the well crafted world of linux into that of MacOSx and Windows 7 and 10.

As a frontend developer there are some things I've learnt with regards to the tooling we use.

## Windows still sucks for NodeJS

But not so much as it did three years ago. Here you can see a [stackoverflow answer I made on this topic at the time](https://stackoverflow.com/questions/12581416/node-js-development-windows-or-linux/27457504#27457504).

## Engine Version Managers are fragile

They work nicely on macosx and linux, because bash is awesome. but bash doesn't exist on windows... so yeah.

## Package Author Tantrums are a primary risk to your project.

every time you `npm i` or `pip install` or `bundle install` or `nuget install` you're at the mercy of people like the author of `pad-left`.

Whats that? you can't install a package and you have to create a prod build for deployment in an hour... oh what a shame.