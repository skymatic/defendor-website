---
layout: en/docs
title: Getting Started
slug: getting-started
stylesheets: ['/css/docs.css']
javascripts: ['/js/anchor.min.js', '/js/docs.js']

tocH2:
  - title: Open the Web Application
    id: open-the-web-application
    tocH3:
      - title: Browser Compatibility
      - id: browser-compatibility
  - title: Initial Setup
    id: initial-setup
  - title: Administration
    id: administration
    tocH3:
    - title: Connecting a Directory Server
      id: connecting-a-directory-server
    - title: Setting up Workspaces
      id: setting-up-workspaces
---
## Open the Web Application {#open-the-web-application}
Enter the hostname on which Cryptomator Server was installed into the browser. If you test the software on your local device, this would be e.g. `https://localhost`.

### Browser Compatibility {#browser-compatibility}
- current Chrome version, tested with version 69
- current Firefox version, tested with version 62
- current Edge version (limited), tested with version 17
- current Safari version, tested with version 11.1

Edge: Does not currently support crypto operations such as server unlock.

## Initial Setup {#initial-setup}
1. In the setup screen, assign a server key to encrypt the data as well as a password for the `admin` user.
2. Then you will be prompted to unlock the server with the server key.
3. Now you can log in with `admin` and the corresponding password that you have just chosen.

## Administration {#administration}
In the Web application, there is a menu on the left. Click on `Admin` to manage settings.

### Connecting a Directory Server {#connecting-a-directory-server}
1. Click on `LDAP` in the administration menu, activate it, and enter the data for the connection to the directory server.
2. Check if the import of the users/groups was successful by clicking on `Users`/`Groups` in the menu on the left.

### Setting up Workspaces {#setting-up-workspaces}
1. Click on `Workspaces` in the administration menu.
2. Create a workspace and assign a name of your choice.
3. Assign those users or user groups which should have access to this workspace.
