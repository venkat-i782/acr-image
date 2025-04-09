# Use the official NGINX image from Docker Hub
FROM nginx:latest

# Copy custom NGINX configuration file (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Copy your website files (e.g., HTML, CSS, JS) to the NGINX server
# Assuming your website files are in the `./html` folder in your project
COPY ./index.html /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start the NGINX server
CMD ["nginx", "-g", "daemon off;"]
