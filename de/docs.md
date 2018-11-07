---
layout: de/markdown
title: Dokumentation
permalink: /docs/
---
<p class="lead" markdown="1">Cryptomator Server ist derzeit eine Beta-Software. Verwenden Sie diese Version nur zum Testen! Wenn Sie die Software selbst kennenlernen möchten, können Sie sie gerne auf Ihrem Server installieren. Bitte senden Sie Ihr Feedback an [server@cryptomator.org](mailto:server@cryptomator.org).</p>

Mit :wrench: gekennzeichnete Bereiche stellen Einstellungen für erfahrenere Systemadministratoren dar.

Mit :warning: werden Hinweise gekennzeichnet, die möglicherweise sicherheitsrelevant sind.

## Play with Docker
Erstellen Sie eine Demo-Instanz von Cryptomator Server, indem Sie unten auf den Button "Try in PWD" klicken.

[![Try in PWD](/assets/pwd-button.png)](http://play-with-docker.com?stack=https%3A%2F%2Fserver.cryptomator.org%2Fassets%2Fpwd-docker-compose.yml&stack_name=Cryptomator%20Server){:target="_blank"}{:rel="noopener"}

Nachdem der Stack erfolgreich erstellt wurde, klicken Sie mit der rechten Maustaste oben auf den Port `8443` und kopieren Sie den Link. Fügen Sie den Link in den Browser ein, ersetzen Sie aber `http://` durch `https://`.

## Installation

### Systemvoraussetzungen
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

### Konfiguration
Laden Sie die Datei [`docker-compose.yml`](/assets/docker-compose.yml){:download="docker-compose.yml"} herunter. Anschließend bearbeiten Sie `docker-compose.yml` nach Belieben.

:warning: Es wird dringend empfohlen, den Wert für `POSTGRES_PASSWORD` durch ein generiertes Passwort zu ersetzen.

## TLS einrichten

:warning: Wenn Sie diesen Schritt überspringen, generiert Cryptomator Server ein selbstsigniertes Zertifikat, was zu einer entsprechenden Warnung in Ihrem Browser führt.

Cryptomator Server benötigt Lesezugriff auf eine `PKCS #12` Datei, die Ihr SSL-Zertifikat und privaten Schlüssel enthält. Sie können `openssl` verwenden, um `pem`-kodierte Dateien in `p12` zu konvertieren.

```
openssl pkcs12 -export -inkey serverKey.key -in serverCert.crt -out serverCert.p12
```

In `docker-compose.yml` müssen Sie

1. den Wert für `HTTPS_P12_PASSWORD` auf das Passwort Ihrer `p12`-Datei setzen, die Sie per `openssl` zugewiesen haben und
2. die entsprechende Zeile unter `volumes` auskommentieren und den korrekten Pfad zu Ihrer `p12`-Datei angeben.

### Start des Servers
Option A: Rufen Sie innerhalb des Ordners, in welchem sich die Datei `docker-compose.yml` befindet, den Befehl `docker-compose up` auf.

:wrench: Option B: Nutzen Sie die Compose-Datei, um sie in einem Docker Swarm zu deployen.

## Inbetriebnahme

### Aufruf der Web-Anwendung
Geben Sie den Hostnamen, auf dem Cryptomator Server installiert wurde, in den Browser ein. Falls Sie die Software auf Ihrem lokalen Gerät testen, wäre dies z.B. `https://localhost`.

#### Browser-Kompatibilität
- aktuelle Chrome-Version, getestet mit Version 69
- aktuelle Firefox-Version, getestet mit Version 62
- aktuelle Edge-Version (eingeschränkt), getestet mit Version 17
- aktuelle Safari-Version, getestet mit Version 11.1

Bei Edge sind Crypto-Operationen wie Server-Unlock zurzeit nicht möglich.

### Initiales Setup
1. Im Setup-Screen vergeben Sie einen Server-Key, mit welchem die Daten verschlüsselt werden, sowie ein Passwort für den `admin`-Nutzer.
2. Anschließend werden Sie zum Entsperren des Servers mit besagtem Server-Key aufgefordert.
3. Nun können Sie sich mit `admin` und dem zugehörigen Passwort einloggen.

### Administration
In der Web-Anwendung gibt es links ein Menü. Dort klicken Sie auf `Admin`, um Einstellungen zu verwalten.

#### Anbindung eines Directory-Servers
1. Klicken Sie im Administrationsmenü auf `LDAP`, aktivieren Sie es und geben Sie die Daten zur Verbindung mit dem Directory-Server an.
2. Kontrollieren Sie den erfolgreichen Import der Nutzer/Gruppen, indem Sie links im Menü auf `Users`/`Groups` klicken.

#### Einrichten von Workspaces
1. Klicken Sie im Administrationsmenü auf `Workspaces`.
2. Erstellen Sie einen Workspace und vergeben einen beliebigen Namen.
3. Ordnen Sie diejenigen Nutzer bzw. Nutzergruppen zu, welche Zugriff auf diesen Workspace haben sollen.

## Nutzung von Cryptomator Server

### Zugriff auf Workspaces
1. Kopieren Sie aus der Web-Anwendung die Workspace-URL, welche unterhalb des Workspace-Namens ganz oben angezeigt wird.
2. Die Workspace-URL ist eine WebDAV-Adresse, die Sie im Windows Explorer (bzw. dem File Browser Ihres jeweiligen Betriebssystems) als Netzlaufwerk einbinden können.
3. Geben Sie im Netzlaufwerk-Dialog Nutzername und Passwort eines der Nutzer an, der auf den Workspace Zugriff hat.

## Beenden des Servers
Sie beenden die Software durch `Strg+C` oder indem Sie in einer neuen Konsole `docker-compose down` ausführen.

## Deinstallation
Falls Sie die Software komplett zurücksetzen wollen (Löschen aller Daten), führen Sie `docker-compose down -v` aus (auch nach dem regulären Beenden noch möglich).

Sie deinstallieren Cryptomator Server, indem Sie das Image aus Docker entfernen. Führen Sie `docker rmi skymatic/defendor:X.Y.Z` aus, um dies zu tun. Setzen Sie für `X.Y.Z` die tatsächliche Versionsnummer ein.

## Troubleshooting

### Nicht reagierende Server
Wir haben auf einigen Linux-Servern Entropie-Engpässe festgestellt, die zu mangelnder Reaktionsfähigkeit führten. Versuchen Sie, `- /dev/urandom:/dev/random:ro` zu `volumes` des `wildfly`-Services in der Datei `docker-compose.yml` hinzuzufügen.

Wenn auch die Entropie des Hostsystems nicht ausreicht, müssen Sie möglicherweise einen Zufallszahlengenerator für das Linux-Random-Device wie `haveged` installieren.
