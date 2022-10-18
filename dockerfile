FROM node:latest

WORKDIR /usr/src/app

COPY . .

RUN yarn

EXPOSE 5000

ENTRYPOINT [ "yarn", "dev" ]
