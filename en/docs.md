---
layout: en/markdown
title: Documentation
permalink: /en/docs/
---
<p class="lead" markdown="1">Cryptomator Server is currently beta software. Use this version for testing only! If you'd like to get to know the software for yourself, feel free to install it on your server. Please send your feedback to [server@cryptomator.org](mailto:server@cryptomator.org).</p>

:wrench: indicates advanced settings for experienced system administrators.

:warning: indicates information that may be relevant for security.

## Play with Docker
You can create a demo instance of Cryptomator Server by pressing the "Try in PWD" button below.

[![Try in PWD](/assets/pwd/button.png)](http://play-with-docker.com/?stack=https%3A%2F%2Fserver.cryptomator.org%2Fassets%2Fpwd%2Fdocker-compose.yml&stack_name=cryptomator-server){:target="_blank"}{:rel="noopener"}

After the stack has been successfully built, right-click the port `443` at the top, and copy the link. Paste the link into the browser but replace `http://` with `https://`.

## Installation

### System Requirements
**Recommendation**
* 2 GB RAM
* 1 GHz Dual-Core CPU
* 1 GB HDD plus storage for your data
* Docker

We recommend running Cryptomator Server on Linux servers. However, the software also works on all platforms supported by Docker. 

If you want to test the software on Windows, you first need Docker (see [https://docs.docker.com/docker-for-windows/](https://docs.docker.com/docker-for-windows/){:target="_blank"}{:rel="noopener"}).

**Minimum Requirements for Starting Containers**
- wildfly: 500 MB
- postgres: 200 MB

**Minimum Requirements for Operating with <10 Users**
- wildfly: 1 GB
- postgres: 500 MB

### Configuration
Download the file [`docker-compose.yml`](/assets/docker-compose.yml){:download="docker-compose.yml"}. Then edit `docker-compose.yml` to your needs.

:warning: It is highly recommended to replace the value for `POSTGRES_PASSWORD` by a generated password.

#### Setup TLS

:warning: If you skip this step, Cryptomator Server will generate a self-signed certificate resulting in a corresponding warning in your browser.

Cryptomator Server needs read access to a `PKCS #12` file containing your SSL certificate and private key. You can use `openssl` to convert `pem`-encoded files to `p12`.

```
openssl pkcs12 -export \
  -inkey serverKey.key \
  -in serverCert.crt \
  -certfile intermediate.crt \
  -out serverCert.p12
```

In your `docker-compose.yml` file, you have to

1. update the value for `HTTPS_P12_PASSWORD` to the password of your `p12` file that you have assigned using `openssl` and
2. uncomment the appropriate line under `volumes` and specify the correct path to your `p12` file.

### Starting the Server
Option A: Execute the command `docker-compose up` inside the folder in which the file `docker-compose.yml` is located.

:wrench: Option B: Use the compose file to deploy it to a Docker Swarm.

## Getting Started

### Open the Web Application
Enter the hostname on which Cryptomator Server was installed into the browser. If you test the software on your local device, this would be e.g. `https://localhost`.

#### Browser Compatibility
- current Chrome version, tested with version 69
- current Firefox version, tested with version 62
- current Edge version (limited), tested with version 17
- current Safari version, tested with version 11.1

Edge: Does not currently support crypto operations such as server unlock.

### Initial Setup
1. In the setup screen, assign a server key to encrypt the data as well as a password for the `admin` user.
2. Then you will be prompted to unlock the server with the server key.
3. Now you can log in with `admin` and the corresponding password that you have just chosen.

### Administration
In the Web application, there is a menu on the left. Click on `Admin` to manage settings.

#### Connecting a Directory Server
1. Click on `LDAP` in the administration menu, activate it, and enter the data for the connection to the directory server.
2. Check if the import of the users/groups was successful by clicking on `Users`/`Groups` in the menu on the left.

#### Setting up Workspaces
1. Click on `Workspaces` in the administration menu.
2. Create a workspace and assign a name of your choice.
3. Assign those users or user groups which should have access to this workspace.

## Usage of Cryptomator Server

### Accessing Workspaces
1. Copy the workspace URL from the Web application, which is displayed at the top below the workspace name.
2. The workspace URL is a WebDAV address that you can include as a network drive in Windows Explorer (or the file browser of your operating system).
3. In the network drive dialog, enter the username and password of one of the users who has access to the workspace.

## Terminating the Server
Terminate the software with `Ctrl+C` or by executing `docker-compose down` in a new console.

## Uninstallation
If you want to completely reset the software (delete all data), run `docker-compose down -v` (still possible after regular termination).

Uninstall Cryptomator Server by removing the image from Docker. Execute `docker rmi skymatic/defendor:X.Y.Z` to do this. For `X.Y.Z`, insert the actual version number.

## Troubleshooting

### Unresponsive Servers
We noticed on some Linux servers entropy shortages leading to unresponsiveness. Try adding `- /dev/urandom:/dev/random:ro` to `volumes` of the `wildfly` service in the file `docker-compose.yml`.

If even the entropy from the host system is not enough, you might have to install a random number generator to feed the linux random device like `haveged`.
