---
title: Avahi Aliases
template: project-detail.jade
tags: dns, avahi, mdns, local dev
repo: git://github.com/airtonix/avahi-aliases.git
homepage: https://github.com/airtonix/avahi-aliases
---

Solved a problem I had in college, university and hackathons: 

* I run my locally developed websites off my laptop.
* My team members need to access these locally developed websites.
* I move around between LANs that have some ip addressing scheme I don't care about.
* My team members don't care either.
* Handing out ip addresses isn't fun... it's a sub task that consumes time... it's annoying.
* Some operations in web development require subdomains.  
* My laptop uses a modern Operating System, therefore it has mDNS and broadcasts `nova.local` is `dhcp IP address assigned to me`
* The implementation of mDNS my operating system uses also happens to support broadcasting CNAMES!

Basically, this announces multiple avahi cname aliases across your local network.

For example You can now have your machine known as :

```
blackbox.local
the.blackbox.local
darkside.local
something.darkside.local
something.something.darkside.local
something.something.something.darkside.local
```