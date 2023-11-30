FROM php:8.2-fpm-alpine

WORKDIR /var/www/laravel

RUN apk update && apk add \
    libpq-dev \
    postgresql-dev && \
    docker-php-ext-install pdo && \
    docker-php-ext-install pdo_pgsql && \
    docker-php-ext-install pgsql && \
    apk cache clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*