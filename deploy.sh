#!/usr/bin/env bash
git pull
npm install
ng build --prod
rm -rf /var/www/frontend/html/*
cp -a -f dist/icms-frontend/. /var/www/frontend/html/
