#!/usr/bin/env bash
BASEDIR=$(dirname "$0")
cd "$BASEDIR"
git reset --hard
git pull
npm install
ng build --prod
rm -rf /var/www/frontend/html/*
cp -a -f dist/icms-frontend/. /var/www/frontend/html/

