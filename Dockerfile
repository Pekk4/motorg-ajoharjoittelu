FROM node:18-alpine as build-stage

WORKDIR /app

COPY . .

RUN npm install && npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 8080
#CMD ["nginx", "-g", "daemon off;"]