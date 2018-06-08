FROM node:8.11.2-alpine

LABEL maintainer="Keith Craley <kcral21@gmail.com"

WORKDIR /app

COPY . .

RUN npm install -g npm
RUN set -x \
    npm ci

CMD [ "./index.js" ]
