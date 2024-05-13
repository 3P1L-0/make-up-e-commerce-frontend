npm run deploy
sass-migrator division **/*.scss
docker buildx build -t 3p1l/inaluma-api-anew-ui:amd64-v8-1.0-beta .
docker push 3p1l/inaluma-api-anew-ui:amd64-v8-1.0-beta
