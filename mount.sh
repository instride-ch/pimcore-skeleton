#!/usr/bin/env bash

if [ -d "vendor/" && ! -f ".env.local" ]
then
  echo "File '.env.local' does not exist, please create it before running this script."
  exit 0
fi

if [ ! -f "var/config/admin_system_settings/admin_system_settings.yaml" ]
then
  echo "File 'var/config/admin_system_settings/admin_system_settings.yaml' does not exist, please create it before running this script."
  exit 0
fi

if [ ! -f "var/config/system_settings/system_settings.yaml" ]
then
  echo "File 'var/config/system_settings/system_settings.yaml' does not exist, please create it before running this script."
  exit 0
fi

docker compose up -d
docker compose exec php chmod +x /var/www/html/bin/console
docker compose exec php composer install --prefer-dist
docker compose exec php chown -R www-data: /var/www/html/vendor
docker compose exec php php vendor/bin/pimcore-install --no-interaction
docker compose exec php php bin/console pimcore:bundle:install PimcoreAdminBundle --no-post-change-commands
docker compose exec php php bin/console pimcore:bundle:install PimcoreApplicationLoggerBundle --no-post-change-commands
docker compose exec php php bin/console pimcore:bundle:install PimcoreSeoBundle --no-post-change-commands
docker compose exec php php bin/console pimcore:bundle:install PimcoreSimpleBackendSearchBundle --no-post-change-commands
docker compose exec php php bin/console pimcore:bundle:install PimcoreTinymceBundle --no-post-change-commands
docker compose exec php php bin/console pimcore:bundle:install SeoBundle --no-post-change-commands
docker compose exec php php bin/console pimcore:bundle:install ToolboxBundle
docker compose down
docker compose up -d
chmod 600 ./.deployer/id_deployer
yarn install
yarn dev
