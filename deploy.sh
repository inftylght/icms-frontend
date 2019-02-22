#!/usr/bin/env bash
BASEDIR=$(dirname "$0")
cd "$BASEDIR"
git pull
npm install
npm audit fix
ng build --prod
rm -rf /var/www/frontend/html/*
cp -a -f dist/icms-frontend/. /var/www/frontend/html/

