# Установка

```
docker-compose run --rm composer install
cd src 
npm install
cp .env.example .env
```
### Настройки для .env
```dotenv
APP_URL=http://localhost:8088

DB_CONNECTION=pgsql
DB_HOST=postgres
DB_PORT=5432
DB_DATABASE=laravel_db_p
DB_USERNAME=laravel
DB_PASSWORD=password

QUEUE_CONNECTION=database
```

### Генерация ключа; миграция; создание симлинка
```
docker-compose run --rm artisan key:generate
docker-compose run --rm artisan migrate
docker-compose run --rm artisan storage:link
```

## Alias for bash
```
   alias a='docker-compose run --rm artisan'
   alias dc='docker-compose run --rm composer'
   alias dcd='docker-compose down'
   alias dcn='docker-compose up nginx -d'
```
