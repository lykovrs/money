#!/bin/bash
# .docker/init-user-db.sh
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER nestjs;
    CREATE DATABASE nestjs;
    GRANT ALL PRIVILEGES ON DATABASE nestjs TO nestjs;
EOSQL
