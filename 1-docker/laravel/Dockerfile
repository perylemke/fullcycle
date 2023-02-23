# Build Stage
FROM php:7.4-cli

# Setting workdir to default
WORKDIR /var/www

# Install zip
RUN apt-get update \
    && apt-get install git libzip-dev -y \
    && docker-php-ext-install zip

# Install Composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php \
    && php -r "unlink('composer-setup.php');" \
    && mv -v composer.phar /usr/local/bin/composer

# Install Laravel
RUN composer create-project --prefer-dist laravel/laravel laravel

ENTRYPOINT [ "php", "laravel/artisan", "serve" ]
CMD [ "--host=0.0.0.0" ]