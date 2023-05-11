FROM node:18-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
RUN npm install -g @angular/cli

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN npm run build

FROM nginx:1.24-alpine
RUN apk --no-cache add curl
 RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-`uname -s`-`uname -m` -o envsubst && \
     chmod +x envsubst
COPY ./docker/nginx.conf /etc/nginx/nginx.template
CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
COPY --from=builder /app/dist/angular-books-list-web /usr/share/nginx/html