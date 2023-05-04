FROM node:18-alpine

COPY ["package.json","package-lock.json","/home/node/app/"]

WORKDIR /app

RUN apk update
RUN npm install -g npm@9.6.6

COPY [".","."]
CMD npm install
RUN npm install -g @angular/cli
EXPOSE 8000

ENTRYPOINT ["sh", "./docker/entrypoint.sh"]
