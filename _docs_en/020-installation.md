---
layout: en/docs
title: Installation
slug: installation
stylesheets: ['/css/docs.css']
javascripts: ['/js/clipboard.min.js', '/js/anchor.min.js', '/js/docs.js']

tocH2:
  - title: Prerequisites
    id: prerequisites
  - title: Configuration
    id: configuration
    tocH3:
    - title: Setup TLS
      id: setup-tls
  - title: Starting the Server
    id: starting-the-server
  - title: System Requirements
    id: system-requirements
---
## Prerequisites {#prerequisites}
Currently, Cryptomator Server is only available as a [Docker](https://www.docker.com/){:target="_blank"}{:rel="noopener"} image. We recommend running Cryptomator Server on Linux servers. However, the software also works on all platforms supported by Docker (like [Windows](https://docs.docker.com/docker-for-windows/){:target="_blank"}{:rel="noopener"} and [macOS](https://docs.docker.com/docker-for-mac/){:target="_blank"}{:rel="noopener"}).

## Configuration {#configuration}
Download the file `docker-compose.yml` and edit it to your needs.

:warning: It is highly recommended to replace the value for `POSTGRES_PASSWORD` by a generated password.

<a class="btn btn-outline-primary" href="/assets/docker-compose.yml" download="docker-compose.yml">Download</a><small class="text-muted ml-2">v{{ site.version }}</small>

### Setup TLS {#setup-tls}
:warning: If you skip this step, Cryptomator Server will generate a self-signed certificate resulting in a corresponding warning in your browser.

Cryptomator Server needs read access to a `PKCS #12` file containing your SSL certificate and private key. You can use `openssl` to convert `pem`-encoded files to `p12`.

```sh
openssl pkcs12 -export \
  -inkey serverKey.key \
  -in serverCert.crt \
  -certfile intermediate.crt \
  -out serverCert.p12
```

In your `docker-compose.yml` file, you have to

1. update the value for `HTTPS_P12_PASSWORD` to the password of your `p12` file that you have assigned using `openssl` and
2. uncomment the appropriate line under `volumes` and specify the correct path to your `p12` file.

## Starting the Server {#starting-the-server}
Option A: Execute the command

```sh
docker-compose up
```

inside the folder in which the file `docker-compose.yml` is located.

:wrench: Option B: Use the compose file to deploy it to a Docker Swarm.

## System Requirements {#system-requirements}
**Recommendation**
* 2 GB RAM
* 1 GHz Dual-Core CPU
* 1 GB HDD plus storage for your data
* Docker

**Minimum Requirements for Starting Containers**
- wildfly: 500 MB
- postgres: 200 MB

**Minimum Requirements for Operating with <10 Users**
- wildfly: 1 GB
- postgres: 500 MB
