FROM php:5.6-apache

RUN apt-get update && \
    apt-get install -y vim

COPY apache2-foreground /usr/local/bin/
COPY templates /var/apache2/templates

COPY conf/ /etc/apache2

RUN a2enmod proxy
RUN a2enmod proxy_http
RUN a2enmod proxy_balancer
RUN a2enmod headers
RUN a2enmod lbmethod_byrequests
RUN a2enmod lbmethod_bytraffic
RUN a2ensite 000-* 001-*

RUN service apache2 restart