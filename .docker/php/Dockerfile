FROM pimcore/pimcore:php8.3-debug-latest

# Install PHP XSL extension
RUN set -eux; \
  build-install.sh; \
  apt-get install -y libxslt-dev; \
  docker-php-ext-install xsl;
