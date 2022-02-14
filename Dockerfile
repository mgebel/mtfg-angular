FROM node:current-alpine3.15 as node

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build --prod

FROM nginx:alpine

COPY --from=node /app/dist/mtfg /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80
