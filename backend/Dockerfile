# образ для development
FROM node:16.13.2-alpine AS development

# Создать директорию внутри контейнера
WORKDIR /app

# Установить зависимости
COPY package*.json ./
RUN npm i -g @nestjs/cli
RUN npm install

# Скопировать приложение из текущей директории в WORKDIR-директорию
COPY . ./

# Скомпилировать приложение
RUN npm run build


#FROM node:16-alpine AS builder
#WORKDIR /app
#COPY package*.json ./
#RUN npm ci --no-audit --no-fund
#COPY . ./
#RUN npm run build
#
#FROM node:16-alpine AS runner
#WORKDIR /app
#COPY package*.json ./
#RUN npm ci --omit=dev --no-audit --no-fund && npm i -g pm2
#COPY --from=builder /app/dist ./dist
#COPY ./ecosystem.config.js ./
#ENTRYPOINT ["pm2-runtime", "start", "ecosystem.config.js"]
