# pull the base image
FROM node:alpine AS builder

# set the working directory
WORKDIR /app

# copy all file from current directory to working dir in image
COPY . .

# install node modules and build
RUN npm install && npm run build


# nginx state for serving content

FROM nginx

# set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# remove default nginx static assets
RUN rm -rf ./*

# copy static assets from builder stage
COPY --from=builder /app/build .

# containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
