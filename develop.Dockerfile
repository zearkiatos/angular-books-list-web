FROM node:18-alpine

COPY ["package.json","package-lock.json","/home/node/app/"]

WORKDIR /app

RUN apk update && \
    apk add --update nodejs

COPY [".","."]
RUN npm install -g npm@9.6.5
CMD npm install -g @angular/cli && \
    npm rebuild node-sass && \
    npm install
ENTRYPOINT ["sh", "./docker/entrypoint.sh"]

EXPOSE 8000
