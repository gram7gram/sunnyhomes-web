#!/usr/bin/env bash

SERVER=45.137.151.250

ssh root@${SERVER} "cd /var/www/sunnyhomes-web && bash update.sh master && docker-compose restart api owner admin"
