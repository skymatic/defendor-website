---
layout: en/docs
title: Introduction
slug: introduction
stylesheets: ['/css/docs.css']
javascripts: ['/js/clipboard.min.js', '/js/anchor.min.js', '/js/docs.js']

tocH2:
  - title: Quickstart
    id: quickstart
  - title: Play with Docker
    id: play-with-docker
---
<p class="lead">Get started with Cryptomator Server, the new heart of your IT infrastructure. The platform encrypts and stores your company files and makes them available via network drives.</p>

**Cryptomator Server is currently beta software. Use this version for testing purposes only! Please send your feedback to [server@cryptomator.org](mailto:server@cryptomator.org).**

:wrench: indicates advanced settings for experienced system administrators.

:warning: indicates information that may be relevant for security.

## Quickstart {#quickstart}
Looking to quickly setup Cryptomator Server on your infrastructure? [Head to the installation page](/en/docs/installation/). If you'd like to give it a quick test, try out "Play with Docker".

## Play with Docker {#play-with-docker}
You can create a demo instance of Cryptomator Server by pressing the "Try in PWD" button below. You may have to register for a Docker ID first if you haven't already.

[![Try in PWD](/assets/pwd/button.png)](http://play-with-docker.com/?stack=https%3A%2F%2Fserver.cryptomator.org%2Fassets%2Fpwd%2Fdocker-compose.yml&stack_name=cryptomator-server){:target="_blank"}{:rel="noopener"}

After the stack has been successfully built, right-click the port `443` at the top, and copy the link. Paste the link into the browser but replace `http://` with `https://`.
