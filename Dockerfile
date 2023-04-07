FROM node:alpine as development
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
EXPOSE 3000

FROM node:alpine as production
WORKDIR /usr/app
COPY package.json .
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM nginx
EXPOSE 3000
COPY .nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=production /usr/app /usr/share/nginx/html
