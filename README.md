![Pimcore Skeleton](docs/images/github_banner.png "Pimcore Skeleton")

# Getting started

**Create valid HTTPS certificates**
```yaml
mkcert -install
mkcert -cert-file ~/.ssh/dev.local+4.pem -key-file ~/.ssh/dev.local+4-key.pem dev.local "*.dev.local" localhost 127.0.0.1 ::1
```

Don't forget to add your local domain to your hosts file:
```
sudo nano /etc/hosts
127.0.0.1 your-domain.dev.local
```

**Create a new Project**
```
composer create-project w-vision/pimcore-skeleton:10.2
```

**Start and connect to Docker container**
```
docker compose up -d && docker compose exec php bash
```

**Install Pimcore**
```
vendor/bin/pimcore-install --admin-username=admin \
                           --admin-password=admin \
                           --mysql-host-socket=db \
                           --mysql-username=pimcore \
                           --mysql-password=pimcore \
                           --mysql-database=pimcore
```

**Install Node Modules**
```
yarn install
```

**Run Webpack**
```
yarn dev
```

## Copyright

w-vision AG, Sandgruebestrasse 4, 6210 Sursee, Switzerland  
https://www.w-vision.ch, support@w-vision.ch  
Copyright © 2022 w-vision AG. All rights reserved.