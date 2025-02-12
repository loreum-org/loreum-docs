FROM nginx:latest

# Copy the static files into the container's document root
COPY build /usr/share/nginx/html/

# Expose port 80 (HTTP)
EXPOSE 80

# Optional: Add a custom configuration file if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create necessary directories and set proper permissions
RUN rm -f /etc/nginx/conf.d/default.conf \
    && mkdir -p /usr/share/nginx/html \
    && echo "user node;" >> /etc/nginx/nginx.conf \
    && chown -R 1000:1000 /usr/share/nginx/html/