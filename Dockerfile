# Use official NGINX image from the Docker Hub
FROM nginx:latest

# Remove the default nginx index page
RUN rm /usr/share/nginx/html/*

# Copy the custom HTML file into the container
COPY ./index.html /usr/share/nginx/html/

# Expose port 80 to the outside world
EXPOSE 80
