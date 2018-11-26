FROM php:7.2-fpm

RUN apt-get update && \
    apt-get install -qy git curl unzip

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php && \
    php -r "unlink('composer-setup.php');" && \
    mv ./composer.phar /usr/local/bin/composer
