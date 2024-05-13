#FROM node:21-alpine as angular
FROM node:16.10.0-alpine as angular
WORKDIR /app
# COPY package*.json ./
COPY . .
# RUN npm i --legacy-peer-deps
# RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points
# COPY . .
# RUN npm run deploy

FROM nginx:1.20.1-alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/inaluma-ui /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

# linux/arm64/v8 - M1 Apple Sillicon
# docker buildx build --platform linux/arm64/v8 -t waspti/wasp-avt-ui:arm64-v8-dev-1.0 .

# linux/amd64
# docker buildx build --platform linux/amd64 -t waspti/wasp-avt-ui:amd64-dev-1.0 .

# linux/x86
# docker buildx build --platform linux/x86 -t waspti/wasp-avt-ui:x86-dev-1.0 .
