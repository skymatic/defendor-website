---
layout: de/docs
title: Inbetriebnahme
slug: getting-started
stylesheets: ['/css/docs.css']
javascripts: ['/js/clipboard.min.js', '/js/anchor.min.js', '/js/docs.js']

tocH2:
  - title: Aufruf der Web-Anwendung
    id: open-the-web-application
    tocH3:
      - title: Browser-Kompatibilität
      - id: browser-compatibility
  - title: Initiales Setup
    id: initial-setup
  - title: Administration
    id: administration
    tocH3:
    - title: Einrichten von Workspaces
      id: setting-up-workspaces
    - title: Anbindung eines Directory-Servers
      id: connecting-a-directory-server
---
## Aufruf der Web-Anwendung {#open-the-web-application}
Geben Sie den Hostnamen, auf dem Cryptomator Server installiert wurde, in den Browser ein. Falls Sie die Software auf Ihrem lokalen Gerät testen, wäre dies z.B. `https://localhost`.

### Browser-Kompatibilität {#browser-compatibility}
- aktuelle Chrome-Version, getestet mit Version 69
- aktuelle Firefox-Version, getestet mit Version 62
- aktuelle Edge-Version (eingeschränkt), getestet mit Version 17
- aktuelle Safari-Version, getestet mit Version 11.1

Bei Edge sind Crypto-Operationen wie Server-Unlock zurzeit nicht möglich.

## Initiales Setup {#initial-setup}
1. Im Setup-Screen vergeben Sie einen Server-Key, mit welchem die Daten verschlüsselt werden, sowie ein Passwort für den `admin`-Nutzer.
2. Anschließend werden Sie zum Entsperren des Servers mit besagtem Server-Key aufgefordert.
3. Nun können Sie sich mit `admin` und dem zugehörigen Passwort einloggen.

## Administration {#administration}
In der Web-Anwendung gibt es links ein Menü. Dort klicken Sie auf `Admin`, um Einstellungen zu verwalten.

### Einrichten von Workspaces {#setting-up-workspaces}
1. Klicken Sie im Administrationsmenü auf `Workspaces`.
2. Erstellen Sie einen Workspace und vergeben einen beliebigen Namen.
3. Ordnen Sie diejenigen Nutzer bzw. Nutzergruppen zu, welche Zugriff auf diesen Workspace haben sollen.

### Anbindung eines Directory-Servers {#connecting-a-directory-server}
1. Klicken Sie im Administrationsmenü auf `LDAP`, aktivieren Sie es und geben Sie die Daten zur Verbindung mit dem Directory-Server an.
2. Kontrollieren Sie den erfolgreichen Import der Nutzer/Gruppen, indem Sie links im Menü auf `Users`/`Groups` klicken.
