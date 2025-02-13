FROM nginx:latest

# Copy the static files into the container's document root
COPY build /usr/share/nginx/html/

# Expose port 80 (HTTP)
EXPOSE 80

# Optional: Add a custom configuration file if needed
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create necessary directories and set proper permissions
RUN chown -R 1000:1000 /usr/share/nginx/html/