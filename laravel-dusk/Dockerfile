FROM php:7.2-fpm

RUN apt-get update && \
    apt-get install -qy git curl unzip chromium-driver libpng-dev && \
    apt-get clean

RUN docker-php-ext-install gd
