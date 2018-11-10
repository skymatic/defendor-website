---
layout: de/docs
title: Installation
slug: installation
stylesheets: ['/css/docs.css']
javascripts: ['/js/anchor.min.js', '/js/docs.js']

tocH2:
  - title: Systemvoraussetzungen
    id: system-requirements
  - title: Konfiguration
    id: configuration
    tocH3:
    - title: TLS einrichten
      id: setup-tls
  - title: Start des Servers
    id: starting-the-server
---
## Systemvoraussetzungen {#system-requirements}
**Empfehlung**
* 2 GB RAM
* 1 GHz Dual-Core CPU
* 1 GB HDD zzgl. Speicherplatz für Ihre Daten
* Docker

Wir empfehlen, Cryptomator Server auf Linux-Servern zu betreiben. Die Software funktioniert aber auch auf allen Plattformen, die von Docker unterstützt werden. 

Wenn Sie die Software auf Windows testen wollen, benötigen Sie zunächst einmal Docker (siehe [https://docs.docker.com/docker-for-windows/](https://docs.docker.com/docker-for-windows/){:target="_blank"}{:rel="noopener"}).

**Mindestanforderungen zum Starten der Container**
- wildfly: 500 MB
- postgres: 200 MB

**Mindestanforderungen für Betrieb mit <10 Nutzern**
- wildfly: 1 GB
- postgres: 500 MB

## Konfiguration {#configuration}
Laden Sie die Datei [`docker-compose.yml`](/assets/docker-compose.yml){:download="docker-compose.yml"} herunter. Anschließend bearbeiten Sie `docker-compose.yml` nach Belieben.

:warning: Es wird dringend empfohlen, den Wert für `POSTGRES_PASSWORD` durch ein generiertes Passwort zu ersetzen.

### TLS einrichten {#setup-tls}
:warning: Wenn Sie diesen Schritt überspringen, generiert Cryptomator Server ein selbstsigniertes Zertifikat, was zu einer entsprechenden Warnung in Ihrem Browser führt.

Cryptomator Server benötigt Lesezugriff auf eine `PKCS #12` Datei, die Ihr SSL-Zertifikat und privaten Schlüssel enthält. Sie können `openssl` verwenden, um `pem`-kodierte Dateien in `p12` zu konvertieren.

```
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
Option A: Rufen Sie innerhalb des Ordners, in welchem sich die Datei `docker-compose.yml` befindet, den Befehl `docker-compose up` auf.

:wrench: Option B: Nutzen Sie die Compose-Datei, um sie in einem Docker Swarm zu deployen.
