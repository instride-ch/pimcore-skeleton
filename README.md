# Pimcore Skeleton

## Local Development

**Create a new Project**

```bash
composer create-project instride/pimcore-skeleton:11.4
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
yarn install && yarn run dev
```

## Copyright

instride AG, Sandgruebestrasse 4, 6210 Sursee, Switzerland  
https://instride.ch, connect@instride.ch  
Copyright © 2024 instride AG. All rights reserved.
