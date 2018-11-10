---
layout: en/docs
title: Uninstallation
slug: uninstallation
stylesheets: ['/css/docs.css']
javascripts: ['/js/anchor.min.js', '/js/docs.js']
---
If you want to completely reset the software (delete all data), run `docker-compose down -v` (still possible after regular termination).

Uninstall Cryptomator Server by removing the image from Docker. Execute `docker rmi skymatic/defendor:X.Y.Z` to do this. For `X.Y.Z`, insert the actual version number.
