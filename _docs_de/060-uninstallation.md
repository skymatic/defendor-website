---
layout: de/docs
title: Deinstallation
slug: uninstallation
stylesheets: ['/css/docs.css']
javascripts: ['/js/anchor.min.js', '/js/docs.js']
---
Falls Sie die Software komplett zurücksetzen wollen (Löschen aller Daten), führen Sie `docker-compose down -v` aus (auch nach dem regulären Beenden noch möglich).

Sie deinstallieren Cryptomator Server, indem Sie das Image aus Docker entfernen. Führen Sie `docker rmi skymatic/defendor:X.Y.Z` aus, um dies zu tun. Setzen Sie für `X.Y.Z` die tatsächliche Versionsnummer ein.
