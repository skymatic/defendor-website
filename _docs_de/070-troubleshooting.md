---
layout: de/docs
title: Troubleshooting
slug: troubleshooting
stylesheets: ['/css/docs.css']
javascripts: ['/js/anchor.min.js', '/js/docs.js']

tocH2:
  - title: Server reagiert nicht
    id: unresponsive-server
---
## Server reagiert nicht {#unresponsive-server}
Wir haben auf einigen Linux-Servern Entropie-Engpässe festgestellt, die zu mangelnder Reaktionsfähigkeit führten. Um die Entropie des Hostsystems zu nutzen, fügen Sie `/dev/urandom:/dev/random:ro` zu `volumes` des `wildfly`-Services in der Datei `docker-compose.yml` hinzu:

```yaml
services:
  wildfly:
    ...
    volumes:
      ...
      - /dev/urandom:/dev/random:ro
```

Wenn auch die Entropie des Hostsystems nicht ausreicht, müssen Sie möglicherweise einen Zufallszahlengenerator für das Linux-Random-Device wie `haveged` installieren.
