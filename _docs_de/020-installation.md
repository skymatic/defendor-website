---
layout: de/docs
title: Installation
slug: installation
stylesheets: ['/css/docs.css']
javascripts: ['/js/anchor.min.js', '/js/docs.js']

tocH2:
  - title: Voraussetzungen
    id: prerequisites
  - title: Konfiguration
    id: configuration
    tocH3:
    - title: TLS einrichten
      id: setup-tls
  - title: Start des Servers
    id: starting-the-server
  - title: Systemvoraussetzungen
    id: system-requirements
---
## Voraussetzungen {#prerequisites}
Derzeit ist der Cryptomator Server nur als [Docker](https://www.docker.com/){:target="_blank"}{:rel="noopener"}-Image verfügbar. Wir empfehlen, Cryptomator Server auf Linux-Servern zu betreiben. Die Software funktioniert aber auch auf allen Plattformen (u.a. [Windows](https://docs.docker.com/docker-for-windows/){:target="_blank"}{:rel="noopener"} und [macOS](https://docs.docker.com/docker-for-mac/){:target="_blank"}{:rel="noopener"}), die von Docker unterstützt werden. 

## Konfiguration {#configuration}
Laden Sie die Datei `docker-compose.yml` herunter und bearbeiten Sie diese anschließend nach Belieben.

:warning: Es wird dringend empfohlen, den Wert für `POSTGRES_PASSWORD` durch ein generiertes Passwort zu ersetzen.

<a class="btn btn-outline-primary" href="/assets/docker-compose.yml" download="docker-compose.yml">Download</a><small class="text-muted ml-2">v{{ site.version }}</small>

### TLS einrichten {#setup-tls}
:warning: Wenn Sie diesen Schritt überspringen, generiert Cryptomator Server ein selbstsigniertes Zertifikat, was zu einer entsprechenden Warnung in Ihrem Browser führt.

Cryptomator Server benötigt Lesezugriff auf eine `PKCS #12`-Datei, die Ihr SSL-Zertifikat und privaten Schlüssel enthält. Sie können `openssl` verwenden, um `pem`-kodierte Dateien in `p12` zu konvertieren.

```sh
openssl pkcs12 -export \
  -inkey serverKey.key \
  -in serverCert.crt \
  -certfile intermediate.crt \
  -out serverCert.p12
```

In `docker-compose.yml` müssen Sie

1. den Wert für `HTTPS_P12_PASSWORD` auf das Passwort Ihrer `p12`-Datei setzen, die Sie per `openssl` zugewiesen haben und
2. die entsprechende Zeile unter `volumes` auskommentieren und den korrekten Pfad zu Ihrer `p12`-Datei angeben.

## Start des Servers {#starting-the-server}
Option A: Rufen Sie innerhalb des Ordners, in welchem sich die Datei `docker-compose.yml` befindet, den Befehl

```sh
docker-compose up
```

auf.

:wrench: Option B: Nutzen Sie die Compose-Datei, um sie in einem Docker Swarm zu deployen.

## Systemvoraussetzungen {#system-requirements}
**Empfehlung**
* 2 GB RAM
* 1 GHz Dual-Core CPU
* 1 GB HDD zzgl. Speicherplatz für Ihre Daten
* Docker

**Mindestanforderungen zum Starten der Container**
- wildfly: 500 MB
- postgres: 200 MB

**Mindestanforderungen für Betrieb mit <10 Nutzern**
- wildfly: 1 GB
- postgres: 500 MB
