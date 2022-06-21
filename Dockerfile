FROM node:14-alpine as base

WORKDIR /src
COPY package*.json /
EXPOSE 3000

FROM base as production
ENV NODE_ENV=production
RUN npm ci
COPY . /
CMD ["node", "src/app.ts"]

FROM base as dev
ENV NODE_ENV=development
RUN npm install -g nodemon && npm install
COPY . /
CMD ["nodemon", "src/app.ts"]