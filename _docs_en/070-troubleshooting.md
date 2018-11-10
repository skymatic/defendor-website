---
layout: en/docs
title: Troubleshooting
slug: troubleshooting
stylesheets: ['/css/docs.css']
javascripts: ['/js/anchor.min.js', '/js/docs.js']

tocH2:
  - title: Unresponsive Server
    id: unresponsive-server
---
## Unresponsive Server {#unresponsive-server}
We noticed on some Linux servers entropy shortages leading to unresponsiveness. Try adding `- /dev/urandom:/dev/random:ro` to `volumes` of the `wildfly` service in the file `docker-compose.yml`.

If even the entropy from the host system is not enough, you might have to install a random number generator to feed the linux random device like `haveged`.