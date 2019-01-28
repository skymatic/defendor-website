---
layout: de/docs
title: Einführung
slug: introduction
stylesheets: ['/css/docs.css']
javascripts: ['/js/clipboard.min.js', '/js/anchor.min.js', '/js/docs.js']

tocH2:
  - title: Schnellstart
    id: quickstart
  - title: Play with Docker
    id: play-with-docker
---
<p class="lead">Jetzt loslegen mit Cryptomator Server, dem neuen Herzstück Ihrer IT-Infrastruktur. Die Plattform verschlüsselt und speichert Ihre Unternehmensdateien und stellt sie über Netzlaufwerke bereit.</p>

**Cryptomator Server ist derzeit eine Beta-Software. Verwenden Sie diese Version nur zum Testen! Bitte senden Sie Ihr Feedback an [server@cryptomator.org](mailto:server@cryptomator.org).**

Mit :wrench: gekennzeichnete Bereiche stellen Einstellungen für erfahrenere Systemadministratoren dar.

Mit :warning: werden Hinweise gekennzeichnet, die möglicherweise sicherheitsrelevant sind.

## Schnellstart {#quickstart}
Möchten Sie den Cryptomator Server auf Ihrer Infrastruktur installieren? [Gehen Sie zur Installationsseite](/docs/installation/). Wenn Sie nur einen kurzen Test machen möchten, probieren Sie "Play with Docker" aus.

## Play with Docker {#play-with-docker}
Erstellen Sie eine Demo-Instanz von Cryptomator Server, indem Sie unten auf den Button "Try in PWD" klicken. Hinweis: Es wird eine Docker ID benötigt.

[![Try in PWD](/assets/pwd/button.png)](http://play-with-docker.com/?stack=https%3A%2F%2Fserver.cryptomator.org%2Fassets%2Fpwd%2Fdocker-compose.yml&stack_name=cryptomator-server){:target="_blank"}{:rel="noopener"}

Nachdem der Stack erfolgreich erstellt wurde, klicken Sie mit der rechten Maustaste oben auf den Port `443` und kopieren Sie den Link. Fügen Sie den Link in den Browser ein, ersetzen Sie aber `http://` durch `https://`.
