---
title: Automation, what I've learnt this year.
stage: draft
tags: nodejs, webpack, browserify, es6, selenium, vuejs
icon: info_outline
date: 2016-01-01
---

This year (and the next) mark the time in my growth where I become more pragmatic in my world view. Evolution and survival of the most pragmatic.


There is more focus on creating systems for people.

## Automation

I really dislike checklists... a lot.

So if I can turn a checklist into code, I will. Now I have more time to work with the team to overcome feature obstacles.

Checklists as code are:
- git hooks
- linters
- e2e tests
- tools that generate things
- deployment code

### Somethings can't be autometed (yet)

I've discovered some checklists are too expensive as code.

**visual regression testing**

Here we found that a tool like wraith to publish incremental snapshots over the life of a project is great for quickly highlight changes. A designer or developer can then make the call if the change is acceptable.

**Unused Code**

Often styles and javascript are created for components that may only come to life when a CMS user enables a setting or adds certain types of content to the page.

In this case we've found that a simple component library gives quick indication about what css/js relates to what html mark-up.

Ideally a developer should not leave dead code in the project.


## Webpack

- webpack. the hero we need not the one we deserve.
- speed differences with `gulp + browserify` vs `webpack dev server` are day and night. Gulp is 20secs everytimg, webpack has an initial time cost, but each change thereafter is relfective of affected code.
- instead of `scriptjs` loading cdn libs, use `system.import(/* webpackChunkName: 'vendor/jquery' */ @vendor/jquery')`
  - cdn might change over next 3years. Most commerical projects are legacy the moment they are deployed. No one likes working on them, so don't make them fragile.
  - assets can now easily be fingerprinted. yay `[chunkhash]`.
  - the magic comment means it's also lazy loaded.

## Gulp

- Gulp is one of those things. It starts out small, quickly turns into a train wreck and your holding all the pieces.
- Most seek to create a black box of tasks, reality is they end up with a mountain of unmaintainable code sparse of desired features... because streams.
- For someone who spends their time looking at directory trees and file managers, It's a mental model that makes sense to the mind incrementally chipping away at a problem.
- Errors are swallowed.
- Most people don't even know how it really works, therefore most of the `gulpfiles` I've looked into are similar to what I imagine a forensics team encounters at mass murder scenes.
- streams are awesome. when used for the right scenario.
