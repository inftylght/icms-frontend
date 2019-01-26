git pull
ng build
rm -rf /var/www/frontend/html/*
cp -a -f dist/icms-frontend/. /var/www/frontend/html/
