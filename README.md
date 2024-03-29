# Pimcore Skeleton

## Local Development

**Create valid HTTPS certificates**

```yaml
mkcert -install
sudo mkcert -cert-file /etc/ssl/dev.local+4.pem -key-file /etc/ssl/dev.local+4-key.pem dev.local "*.dev.local" localhost 127.0.0.1 ::1
sudo chown <username>:staff /etc/ssl/dev.local+4.pem /etc/ssl/dev.local+4-key.pem
```

Don't forget to add your local domain to your hosts file:
```
sudo nano /etc/hosts
127.0.0.1 your-domain.dev.local
```

**Create a new Project**

```
composer create-project instride/pimcore-skeleton:10.6
```

**Start and connect to Docker container**

```
docker compose up -d && docker compose exec php bash
```

**Install Pimcore**

```
php vendor/bin/pimcore-install --admin-username=admin \
                               --admin-password=admin \
                               --mysql-host-socket=db \
                               --mysql-username=pimcore \
                               --mysql-password=pimcore \
                               --mysql-database=pimcore
```

**Install Node Modules and run Webpack**

Open a new terminal and run the following command locally.

```
yarn install && yarn dev
```

## Copyright

instride AG, Sandgruebestrasse 4, 6210 Sursee, Switzerland  
https://instride.ch, connect@instride.ch  
Copyright © 2024 instride AG. All rights reserved.
