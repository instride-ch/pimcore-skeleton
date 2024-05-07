#!/usr/bin/env bash

if [ ! -f "var/config/system_settings/system_settings.yaml" ]
then
  echo "File 'var/config/system_settings/system_settings.yaml' does not exist, please create it before running this script."
  exit 0
fi

docker compose up -d
docker compose exec php chmod +x /var/www/html/bin/console
docker compose exec php composer install --prefer-dist
docker compose exec php chown -R www-data: /var/www/html
docker compose exec php php vendor/bin/pimcore-install --no-interaction
docker compose exec php php bin/console pimcore:bundle:install PimcoreAdminBundle
docker compose exec php php bin/console pimcore:bundle:install PimcoreApplicationLoggerBundle
docker compose exec php php bin/console pimcore:bundle:install PimcoreSeoBundle
docker compose exec php php bin/console pimcore:bundle:install PimcoreSimpleBackendSearchBundle
docker compose exec php php bin/console pimcore:bundle:install PimcoreTinymceBundle
#docker compose exec php php bin/console pimcore:bundle:install EmailizrBundle
docker compose exec php php bin/console pimcore:bundle:install SeoBundle
docker compose exec php php bin/console pimcore:bundle:install ToolboxBundle
docker compose down
docker compose up -d
yarn install
yarn build
