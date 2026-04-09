#Build

FROM node:22 AS Build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

#Serve using nginx
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
RUN echo 'server { \
    listen 80; \
    location / { \
      root /usr/share/nginx/html; \
      index index.html; \
      try_files $uri $uri/ /index.html; \
      } \
    }' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]