![Pimcore Skeleton](docs/images/github_banner.png "Pimcore Skeleton")

# Getting started

**Create a new Project**
```
composer create-project w-vision/pimcore-skeleton:5.4
```

**Start Docker**
```
docker-compose up -d
```

**Connect to Docker**
```
docker-compose exec php bash
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
yarn dev:server
```

## Copyright

w-vision AG, Sandgruebestrasse 4, 6210 Sursee, Switzerland  
https://www.w-vision.ch, support@w-vision.ch  
Copyright © 2018 w-vision AG. All rights reserved.
