# Pimcore Skeleton

## Local Development

**Create valid HTTPS certificates**

```bash
mkcert -install
sudo mkcert -cert-file /etc/ssl/dev.local+4.pem -key-file /etc/ssl/dev.local+4-key.pem dev.local "*.dev.local" localhost 127.0.0.1 ::1
sudo chown <username>:staff /etc/ssl/dev.local+4.pem /etc/ssl/dev.local+4-key.pem
```

Don't forget to add your local domain to your hosts file:
```bash
sudo nano /etc/hosts
127.0.0.1 your-domain.dev.local
```

**Create a new Project**

```bash
composer create-project instride/pimcore-skeleton:11.3
```

**Start and connect to Docker container**

```bash
docker compose up -d && docker compose exec php bash
```

**Install Pimcore**

```bash
php vendor/bin/pimcore-install --no-interaction
```

**Install Node Modules and run Webpack**

Open a new terminal and run the following command locally.

```bash
yarn install && yarn dev
```

## Copyright

instride AG, Sandgruebestrasse 4, 6210 Sursee, Switzerland  
https://instride.ch, connect@instride.ch  
Copyright © 2024 instride AG. All rights reserved.
