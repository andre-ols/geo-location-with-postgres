FROM node:16.16.0 AS base
RUN npm install -g pnpm@7.8.0

FROM base as development
WORKDIR /usr/geolocation-postgres
COPY package.json .
COPY pnpm-lock.yaml .
COPY .npmrc .
RUN pnpm install
COPY tsconfig.build.json .
COPY tsconfig.json .
COPY nest-cli.json .
COPY .env.development .
COPY ./src ./src