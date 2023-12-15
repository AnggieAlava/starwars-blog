FROM nginx:latest

COPY public/ /usr/share/nginx/html
RUN ls