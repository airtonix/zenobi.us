---
title: Angular Named Routes
template: project.jade
tags: routes
homepage: http://github.com/airtonix/angular-named-routes/
repo: git://github.com/airtonix/angular-named-routes.git
---

### About

Created to address one of the frustrations I have with any framework that deals with routes (yet fails to provide reversible named routes)

#### Goals

The goal of named-routes is simple on two fronts:

a) To reduce future maintenance work load.
b) Pioneer the popularity angularjs 'content application modules' (not to be confused with 'feature modules')

#### Reduce Workload

It might not be obvious in the short term, but experienced web developers who have worked in teams of people from a wide range of technical skill levels and backgrounds will know that at some point your routing scheme will change. It's not a case of 'if' but always 'when'.

At that point you will be glad that your routes are centerally defined and have shortcut names attached, you will appreciate that through out your code base these shortcut names were used instead of hard coding all the route paths.

#### Increase Module Diversity

One of the aspects I enjoyed from Django was that a project was made up of pluggable applications each describing their own routes. As the project integrator I was able to anchor the root of each applications routing scheme where ever I pleased... with some applications it was even possible to completly redefine the routing scheme simply by assigning my routing scheme with the shortcut names used in the pluggable application.

The javascript community isn't mature enough to realise this is an area where it needs to realise significant workflow efficiency improvements... But with this module I can make a small difference in the applications I create.
